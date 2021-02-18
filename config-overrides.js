const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = (config, env) => {
  if (env === 'production') {
    config.plugins = config.plugins.concat([
      new PrerenderSPAPlugin({
        routes: [
            '/', 
            '/faq',
            '/brand',
            '/ambassador',
            '/community',
            '/media',
            '/reports',
            '/events',
            '/videos',
            '/news',
            '/tech',
            '/economic_model',
            '/404'
        ],
        staticDir: path.join(__dirname, 'build'),
      }),
    ]);
  }

  return config;
};