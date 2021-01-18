#!/usr/bin/env node
var argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('Usage: $0 <command> [options]')
    //command line 
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
    .example('$0 who-wins -plaintiff KN -defendant NNV ', 'Returns the winner: plaintiff')    
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


var {command_whowins} =  require('./command-line');
var startServer = require('./server')

if (argv._=="whowins"){
    command_whowins(argv.p, argv.d);
}else if (argv._=="serve"){
    startServer(argv.p);
} else{
    yargs.showHelp();
}
