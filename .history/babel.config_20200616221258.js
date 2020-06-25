const presets = ["@vue/cli-plugin-babel/preset"]
const plugins = [
  [
    "import",
    {
      libraryName: "vant",
      libraryDirectory: "es",
      style: true
    },
    "vant"
  ]
]
const css = {
  loaderOptions: {
    postcss: {
      plugins: [
        require('postcss-plugin-px2rem') ({
          r
        })
      ]
    }
  }
}

module.exports = {
  presets,
  plugins
}
