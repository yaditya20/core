'use strict';

const { readConfig, writeConfig } = require('../../../utils')

/**
 * [description]
 * @return {[type]} [description]
 */
module.exports = async () => {
  let config = readConfig('api/public')
  config.cache.enabled = true

  return writeConfig('api/public', config)
}
