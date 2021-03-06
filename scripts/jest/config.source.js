'use strict';
const babelJest = require('babel-jest');

const moduleNameMapper = {
  'govuk-react-components(.*)': '<rootDir>/src$1'
};

module.exports = {
  setupTestFrameworkScriptFile: require.resolve('./setupTests.js'),
  // Only include files directly in __tests__, not in nested folders.
  testRegex: '/__tests__/[^/]*(\\.js)$',
  rootDir: process.cwd(),
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.js'],
  timers: 'fake',
  moduleNameMapper: moduleNameMapper,
  snapshotSerializers: [
    "jest-serializer-html",
    "enzyme-to-json/serializer"
  ],
  transform: {
    "^.+\\.js[x]?$": "babel-jest"
  }
};
