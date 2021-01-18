var registry = require('./registry').registry;


function isValid(sign, sequence){
    let validation = "^["+sequence+"]+$";
    return sign.match(validation);
}

function isValidSignature(sign){
    let charSequence = Object.keys(registry).join("");
    return isValid(sign, charSequence);
}

function isValidSignatureWithMissing(sign){
    let charSequence = Object.keys(registry).join("")+'#'; //TODO solo puede haber un #
    return isValid(sign, charSequence);
}

function validateSignatures(p,d){
    if (!isValidSignature(p)){
        throw new Error('Invalid Plaintiff Signatures:  '+p);
    } else if (!isValidSignature(d)){
        throw new Error('Invalid Defendant Signatures: '+d);
    }
}



function cleanKingSignature(signature){
    //when a King signs, the signatures of the validators on his part have no value.
    if (signature.includes('K')){
        return signature.replace('V','');
    }
    return signature;

}
function calcSignatureValue(signature){

    let value = 0;
    let arr = signature.split('');
    arr.forEach(sign => value+=registry[sign])
    return value;
}

exports.calcSignatureValue = calcSignatureValue;
exports.cleanKingSignature = cleanKingSignature;
exports.isValidSignature = isValidSignature;
exports.validateSignatures = validateSignatures;
