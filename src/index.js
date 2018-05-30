#!/usr/bin/env node

import * as fs from 'fs';
import * as commander from 'commander';
import {init} from 'init';

commander
.command('create-centraal-app <projectName>')
.description('Create a simple structure folder')
.action((projectName) => {
    init(projectName);
});

commander.parse(process.argv);
