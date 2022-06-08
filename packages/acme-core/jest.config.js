const base = require('../../jest.config');

module.exports = {
  ...base,
  setupFilesAfterEnv: [...base.setupFilesAfterEnv, './jest.setup.js'],
  roots: ['./'],
  displayName: { name: 'UI Tests', color: '#5DADE2' },
};
