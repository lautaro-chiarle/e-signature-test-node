var {who_wins} = require('../../core');

function service_whowins(p,d){
    return who_wins(p,d);
}

exports.service_whowins = service_whowins;