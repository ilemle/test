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
          '@api': './src/api',
          '@store': './src/store',
          '@components': './src/components',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
