#!/usr/bin/env node

const commander = require( 'commander');
import { init, generate } from './init';

commander
.command('new <projectName>')
.description('Create a simple structure folder')
.action((projectName) => {
    init(projectName);
});

commander
.command('generate <moduleName>')
.description('Create a new module')
.action((moduleName) => {
    generate(moduleName);
});

commander.parse(process.argv);
