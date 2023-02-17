module.exports = {
  plugins: [
    [
      'module-resolver', {
        root: [ '.' ],
        alias: {
          '@actions': './src/actions',
          '@components': './src/components',
          '@config': './src/config',
          '@containers': './src/containers',
          '@hooks': './src/hooks',
          '@locales': './src/locales',
          '@reducers': './src/reducers',
          '@services': './src/services',
          '@store': './src/store',
          '@styles': './src/styles',
          '@managers': './src/managers',
          '@utils': './src/utils'
        }
      }
    ]
  ]
};
