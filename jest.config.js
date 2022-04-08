module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['/build/'],
  moduleDirectories: ['node_modules', 'src'],
};
