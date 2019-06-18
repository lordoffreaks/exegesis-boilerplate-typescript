// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'json', 'ts'],
  testMatch: ['**/test/**/*\\.(spec)\\.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  preset: 'ts-jest'
}
