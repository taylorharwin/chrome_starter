const webpack = require('webpack');
const envvar = require('envvar');
const PORT = envvar.number('PORT', 3000);
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(PORT, 'localhost', (err, result) => {
  if (err != null) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:/' + PORT);
});
