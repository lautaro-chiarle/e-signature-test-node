var {
  calcSignatureValue,
  cleanKingSignature,
  validateSignatures,
  validateSignaturesWithMissing,
} = require("./utils");

function who_wins(plaintiff, defendant) {
  let p = plaintiff.toUpperCase();
  let d = defendant.toUpperCase();
  validateSignatures(p, d);
  p = cleanKingSignature(p);
  d = cleanKingSignature(d);

  plaintiff_value = calcSignatureValue(p);
  defendant_value = calcSignatureValue(d);

  if (plaintiff_value > defendant_value) {
    return "Plaintiff";
  } else if (defendant_value > plaintiff_value) {
    return "Defendant";
  } else {
    return "Tie";
  }
}

function how_2_win(plaintiff, defendant) {
  if (plaintiff.includes("##")) {
    throw new Error("Invalid Plaintiff Signatures:  " + plaintiff);
  }
  return "N";
}

exports.who_wins = who_wins;
exports.how_2_win = how_2_win;
