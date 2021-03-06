var registry = require("./registry").registry;

function isValid(sign, sequence) {
  let validation = "^[" + sequence + "]+$";
  return sign.match(validation);
}

function isValidSignature(sign) {
  let charSequence = Object.keys(registry).join("");
  return isValid(sign, charSequence);
}

function validateSignatures(p, d) {
  if (!isValidSignature(p)) {
    throw new Error("Invalid Plaintiff Signatures:  " + p);
  } else if (!isValidSignature(d)) {
    throw new Error("Invalid Defendant Signatures: " + d);
  }
}

function hasMissingSignature(signature) {
  return signature.includes("#");
}

function cleanKingSignature(signature) {
  //when a King signs, the signatures of the validators on his part have no value.
  if (signature.includes("K")) {
    return signature.replace("V", "");
  }
  return signature;
}
function calcSignatureValue(signature) {
  let value = 0;
  let arr = signature.split(""); //transforms the string into an array
  arr.forEach((sign) => (value += registry[sign])); //adds the value of each signature
  return value;
}

function validateAndCalc(plaintiff, defendant) {
  let p = plaintiff.toUpperCase();
  let d = defendant.toUpperCase();
  validateSignatures(p, d);
  p = cleanKingSignature(p);
  d = cleanKingSignature(d);

  p_value = calcSignatureValue(p);
  d_value = calcSignatureValue(d);

  return [p_value, d_value];
}

function lookForMinSignature(diff) {
  for (s in registry) {
    if (registry[s] > diff) {
      return s;
    }
  }
  throw new Error("No way to win!");
}

exports.validateSignatures = validateSignatures;
exports.hasMissingSignature = hasMissingSignature;
exports.validateAndCalc = validateAndCalc;
exports.lookForMinSignature = lookForMinSignature;
