module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.tsx',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.jsx',
          '.json',
          '.png',
        ],
        root: ['./'],
        alias: {
          '@app': './src',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
