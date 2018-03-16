#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const yeoman = require('yeoman-environment');
const env = yeoman.createEnv();

const generatorPath = path.resolve(__dirname, 'index.js');

env.register(generatorPath, process.env.npm_package_name);
env.run(process.env.npm_package_name);
