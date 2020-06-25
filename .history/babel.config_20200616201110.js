module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libaryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
