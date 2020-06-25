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
const css = {}
const autoprefixer = require("autoprefixer")
const pxtorem = require("postcss-pxtorem")

module.exports = {
  presets,
  plugins
}
