module.exports = {
  preset: 'ts-jest',
  //   preset: '@vue/vue3-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
};
