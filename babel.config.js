module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@navigations': './src/navigations',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
