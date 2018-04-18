'use strict';

const logger = require('./logger')

/**
 * [plugin description]
 * @type {Object}
 */
exports.plugin = {
  pkg: require('../package.json'),
  defaults: require('./defaults.json'),
  alias: 'logger',
  register: async (hook, config, app) => logger.init()
}
