module.exports = {
  moduleNameMapper: {
    // see: https://github.com/kulshekhar/ts-jest/issues/414#issuecomment-517944368
    '^@/(.*)$': '<rootDir>/src/$1',
    db: '<rootDir>/database/db.ts',
  },
  preset: 'ts-jest/presets/default-esm',
  globals: {
    jest: {
      useESM: true,
    },
  },
  moduleFileExtensions: ['json', 'js', 'ts', 'cjs'],
  moduleDirectories: ['node_modules'],
}
