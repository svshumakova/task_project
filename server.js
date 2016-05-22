var config = require("./webpack.config.js");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

const port  = process.env.PORT || 8080;

config.entry.unshift("webpack-dev-server/client?http://localhost:8080/");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    contentBase: "./dist/",
});
server.listen(port, function() {
    console.log('server running on ' + port)
});
