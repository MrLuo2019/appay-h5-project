const presets = []
const autoprefixer = require("autoprefixer")
const pxtorem = require("postcss-pxtorem")

module.exports = {
  presets: ,
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ]
  ],
  css: {
  }
}
