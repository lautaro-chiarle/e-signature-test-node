#!/usr/bin/env node
var {command_whowins, command_how2win} =  require('./cli');
var {startServer} = require('./web')
var yargs = require('yargs');

var argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('Usage: $0 <command> [options]')
    //COMMANDS CONFIGURATION

    //whowins
    .command('whowins', "Identify the winner party in the trial given parties's signatures",
    (yargs) => {
        yargs
        .alias('p', 'plaintiff')
        .nargs('p', 1)
        .describe('p', 'The plaintiff\'s signatures')
        .alias('d', 'defendant')
        .nargs('d', 1)
        .describe('d', 'The defendant\'s signatures')
        .demandOption(['p', 'd'])
        .help('h')
        .alias('h', 'help')
    }
    )
    .example('$0 whowins --plaintiff KN --defendant NNV ', 'Returns the winner: Plaintiff') 

    //how2win
    .command('how2win', "Identify the needed signature in order to win",
    (yargs) => {
        yargs
        .alias('p', 'plaintiff')
        .nargs('p', 1)
        .describe('p', 'The plaintiff\'s signatures')
        .alias('d', 'defendant')
        .nargs('d', 1)
        .describe('d', 'The defendant\'s signatures')
        .demandOption(['p', 'd'])
        .help('h')
        .alias('h', 'help')
    }
    )
    .example('$0 how2win --plaintiff N#V  --defendant NVV ', 'Returns the needed signature: N')         

    //http server
    .command('serve', "Serves the application via HTTP",    
    (yargs) => {
        yargs
        .alias('p', 'port')
        .nargs('p', 1)
        .describe('p', 'The port number')
        .demandOption(['p'])
        .help('h')
        .alias('h', 'help')
    }
    )
    .example('$0 serve -port 8080 ', 'Start listening to http connections on port 8080')    

    //Help
    .help('h')
    .alias('h', 'help')
    .epilog('copyright Lautaro Chiarle - 2021')
    .argv;

//Executes processes according to the read command
if (argv._=="whowins"){
    command_whowins(argv.p, argv.d);
}else if (argv._=="how2win"){
    command_how2win(argv.p, argv.d);
} else if (argv._=="serve"){
    startServer(argv.p);
} else{
    console.log("Command not understood!")
    yargs.showHelp();
}
