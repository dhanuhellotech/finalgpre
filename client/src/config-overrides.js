const path = require('path');

module.exports = function override(config) {
  // Allow importing from outside the 'src' directory
  config.resolve.modules.push(path.resolve('src'));
  return config;
};
