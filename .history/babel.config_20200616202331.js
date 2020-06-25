
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    {
      autoprefixer: {
        browsers: ['Android >= 4.0', 'iOS >= 8'],
      },
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*'],
      },
    }
  ]
}
