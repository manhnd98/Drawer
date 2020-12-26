const path = require('path');
const appDir = '../src/background/';

module.exports = {
    entry: {
        background: path.join(__dirname, appDir + 'background.ts')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.join(__dirname, '../dist/js'),
        filename: '[name].js'
    }
};