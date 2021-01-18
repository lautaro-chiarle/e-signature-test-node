
const registry = {
    'K': 5,
    'N': 2,
    'V': 1
};

function isValidSignature(sign){
    let charSequence = Object.keys(registry).join("");
    let validation = "^["+charSequence+"]+$";
    return sign.match(validation);

}
function cleanKingSignature(signature){
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

function who_wins(plaintiff,defendant){
    let p = plaintiff.toUpperCase();
    let d = defendant.toUpperCase();
    if (isValidSignature(p) && isValidSignature(d)){
        p = cleanKingSignature(p);
        d = cleanKingSignature(d);
    
        plaintiff_value = calcSignatureValue(p);
        defendant_value = calcSignatureValue(d);
    
        if (plaintiff_value>defendant_value){
            return "Plaintiff";
        }else if (defendant_value>plaintiff_value){
            return "Defendant";
        }else{
            return "Tie";
        }
    }else{
        throw new Error('Invalid Signatures');
    }

}

exports.who_wins = who_wins;