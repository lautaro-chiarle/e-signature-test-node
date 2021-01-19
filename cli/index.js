
var {who_wins, how_2_win} = require('../core');

function command_whowins(p,d){
    console.log(who_wins(p,d));
}

function command_how2win(p,d){
    console.log(how_2_win(p,d));
}


exports.command_whowins = command_whowins;
exports.command_how2win = command_how2win;