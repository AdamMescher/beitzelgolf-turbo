const base = require('../../jest.config');

module.exports = {
  ...base,
  setupFilesAfterEnv: ['@testing-library/jest-dom', './jest.setup.js'],
  roots: ['./'],
  displayName: {
    name: 'Web Tests',
    color: '#52BE80',
  },
};
