module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: [require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')],
    },
  },
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@env': '<rootDir>/src/environments/environment',
    '@src/(.*)': '<rootDir>/src/$1',
    '@state/(.*)': '<rootDir>/src/app/state/$1',
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  testPathIgnorePatterns: ['<rootDir>/cypress/', '<rootDir>/src/test.ts'],
  transformIgnorePatterns: ['node_modules/(?!(jest-test))'],
};
