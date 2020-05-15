import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';
/* eslint-disable no-unused-vars */

process.env.NODE_ENV = 'production';

console.log(chalk.blue('building prod version'));

webpack(webpackConfig).run((err,stats) => {
    if(err){
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();

    if(stats.hasError){
        console.log(chalk.red(jsonStats));
    }
    if(stats.hasWarnings){
        console.log(chalk.bold(jsonStats));
    }

    console.log(`stats - ${stats}`);

    console.log(chalk.green('app has been built and written to dist'));

    return 0;
}); 