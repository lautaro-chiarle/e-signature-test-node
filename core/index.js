var {
  hasMissingSignature,
  validateAndCalc,
  lookForMinSignature,
} = require("./utils");

// Who Wins main function
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

// How to Win main function
function how_2_win(plaintiff, defendant) {

  
  let missingCount =   ((plaintiff + defendant).match(/#/g) || []).length;  //Counts the number of character # occurrences
  
  if ( missingCount != 1) {
    throw new Error("Invalid  Signatures: " + plaintiff + " - " + defendant);
  }

  let diff =0;
  if (hasMissingSignature(plaintiff)) {
    plaintiff = plaintiff.replace("#", "");
  }else if (hasMissingSignature(defendant)) {
    defendant = defendant.replace("#", "");
  }

  [plaintiff_value, defendant_value] = validateAndCalc(plaintiff, defendant);
  diff = Math.abs(plaintiff_value - defendant_value);

  
  return lookForMinSignature(diff);
}

exports.who_wins = who_wins;
exports.how_2_win = how_2_win;
