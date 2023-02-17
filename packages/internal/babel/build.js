module.exports = {
  extends: './aliases',
  presets: [
    [
      '@babel/preset-react', { runtime: 'automatic' }
    ],
    '@babel/preset-typescript'
  ]
};
