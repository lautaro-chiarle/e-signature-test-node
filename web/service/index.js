var {who_wins, how_2_win} = require('../../core');

//Invokes who_wins on the core module
function service_whowins(p,d){
    return who_wins(p,d);
}

//Invokes how_2_win on the core module
function service_how2win(p,d){
    return how_2_win(p,d);
}

exports.service_whowins = service_whowins;
exports.service_how2win = service_how2win;
