var webpack = require('webpack');

module.exports = {
    context: __dirname,
    // devtool: debug ? "inline-sourcemap" : null,
    devtool: false,
    entry: {
        specific: "./lib/specific.js",
        destructor: "./lib/destructor.js",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].min.js"
    },
    // plugins: debug ? [] : [
    plugins: [
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false,
            compress: {
                warnings: true, // warn about potentially dangerous optimizations/code
                sequences: true,  // join consecutive statemets with the “comma operator”
                properties: true,  // optimize property access: a["foo"] → a.foo
                dead_code: true,  // discard unreachable code
                drop_debugger: true,  // discard “debugger” statements
                unsafe: false, // some unsafe optimizations (see below)
                conditionals: true,  // optimize if-s and conditional expressions
                comparisons: true,  // optimize comparisons
                evaluate: true,  // evaluate constant expressions
                booleans: true,  // optimize boolean expressions
                loops: true,  // optimize loops
                unused: true,  // drop unused variables/functions
                hoist_funs: true,  // hoist function declarations
                hoist_vars: true, // hoist variable declarations
                if_return: true,  // optimize if-s followed by return/continue
                join_vars: true,  // join var declarations
                cascade: true,  // try to cascade `right` into `left` in sequences
                side_effects: true,  // drop side-effect-free statements
            }
        }),
    ],
};