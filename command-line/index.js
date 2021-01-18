
var {who_wins} = require('../core');

function command_whowins(p,d){
    console.log(who_wins(p,d));
}

exports.command_whowins = command_whowins;