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
        req
      ]
    }
  }
}

module.exports = {
  presets,
  plugins
}
