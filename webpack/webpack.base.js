const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = { 

    // configure how webpack index the imported modules
    resolve: {

        // when the imported module doesn't have postfix, webpack will check with these extensions.
        extensions: ['.js', '.jsx', '.ts', '.tsx'],  

        // we can use the following alias when importing the module. 
        alias: {
            '@src': path.join(__dirname, '../', 'app/renderer'),
          },
    }, 
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                }, 
            }
        ], 
    }, 
    plugins: [new CleanWebpackPlugin()], 
}