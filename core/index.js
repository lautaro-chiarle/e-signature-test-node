var {
  hasMissingSignature,
  validateAndCalc,
  lookForMinSignature,
} = require("./utils");

function who_wins(plaintiff, defendant) {
  [plaintiff_value, defendant_value] = validateAndCalc(plaintiff, defendant);

  if (plaintiff_value > defendant_value) {
    return "Plaintiff";
  } else if (defendant_value > plaintiff_value) {
    return "Defendant";
  } else {
    return "Tie";
  }
}

function how_2_win(plaintiff, defendant) {
  let missingCount =   ((plaintiff + defendant).match(/#/g) || []).length;
  if ( missingCount != 1) {
    throw new Error("Invalid  Signatures: " + plaintiff + " - " + defendant);
  }

  let diff =0;
  if (hasMissingSignature(plaintiff)) {
    plaintiff = plaintiff.replace("#", "");
    [plaintiff_value, defendant_value] = validateAndCalc(plaintiff, defendant);
    diff = defendant_value - plaintiff_value;
  }else if (hasMissingSignature(defendant)) {
    defendant = defendant.replace("#", "");
    [plaintiff_value, defendant_value] = validateAndCalc(plaintiff, defendant);
    diff = plaintiff_value - defendant_value;
  }

  
  return lookForMinSignature(diff);
}

exports.who_wins = who_wins;
exports.how_2_win = how_2_win;
