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
  if (((plaintiff + defendant).match(/#/g) || []).length != 1) {
    throw new Error("Invalid  Signatures: " + plaintiff + " - " + defendant);
  }

  if (hasMissingSignature(plaintiff)) {
    plaintiff = plaintiff.replace("#", "");

    [plaintiff_value, defendant_value] = validateAndCalc(plaintiff, defendant);
    return lookForMinSignature(defendant_value - plaintiff_value);
  }
}

exports.who_wins = who_wins;
exports.how_2_win = how_2_win;
