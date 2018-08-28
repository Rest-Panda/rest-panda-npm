#!/usr/bin/env node

const {prompt} = require('inquirer');
const cli = require('commander');

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter username account:'
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter password account:'
    }
]

cli
    .version('0.0.1')
    .usage('[command] <params>')
    .description('CLI to manager the Rest Panda project');

cli
    .command('gen-client <platform>')
    .action(function (app, cmd) {
        console.log('*** Please inform your credentials to access the Rest Panda account ***');
        prompt(questions)
            .then(answers => console.log(answers))
    })

cli
    .command('gen-server <platform>')
    .action(function (app, cmd) {
        console.log('*** Please inform your credentials to access the Rest Panda account ***');
        prompt(questions)
            .then(answers => console.log(answers))
    })

cli
    .parse(process.argv);
