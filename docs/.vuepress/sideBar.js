const {
    sidebarConfig
} = require("vuepress-theme-hope");

// 将配置项独立成 JSON 单文件，方便自动添加类容
const componentPages = require("./componentPages.json")

module.exports = {
    zh: sidebarConfig(
        componentPages.zh
    )
}