const Generator = require('yeoman-generator');
const chalk = require('chalk');
const path = require('path');

const destinationPath = '../../..';

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(this.templatePath('.'), this.destinationPath(destinationPath), this.props);
  }

  install() {
    this.npmInstall(['crowded-google-map'], { save: true }, { cwd: path.join(destinationPath) }).then(() => {
      console.log(chalk.green('Crowded Google Map :: NPM module installed and saved to package.json'));
    });
  }

  end() {
    console.log(
      chalk.green('See readme for the crowded-google-map package: https://www.npmjs.com/package/crowded-google-map')
    );
    console.log(
      chalk.yellow('Deploy your files and open your project at page /crowded-google-map to see the working example')
    );
  }
};
