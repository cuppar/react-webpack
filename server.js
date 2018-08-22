const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const webpackConfig = require('./webpack.dev.js');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

let server = app.listen(3000, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`App listening at http://${host}:${port}`);
});
