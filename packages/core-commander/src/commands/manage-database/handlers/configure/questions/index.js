'use strict';

/**
 * [exports description]
 * @type {Array}
 */
module.exports = [{
  type: 'select',
  name: 'dialect',
  message: 'What database driver are you going to use?',
  choices: [
    { title: 'PostgreSQL', value: 'postgres' },
    { title: 'SQLite', value: 'sqlite' },
    { title: 'MySQL', value: 'mysql' },
    { title: 'MSSQL', value: 'mssql' }
  ]
}, {
  type: 'confirm',
  name: 'logging',
  message: 'Would you like to enable query logging?'
}]
