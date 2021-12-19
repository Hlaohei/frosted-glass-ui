module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    // TODO: 没效果，有点问题
    [
      "component",
      {
        libraryName: "frosted-glass-ui",
        styleLibraryName: "styles"
      }
    ]
  ]
}