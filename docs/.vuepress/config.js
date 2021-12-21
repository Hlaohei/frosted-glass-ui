// .vuepress/config.js
const {
    config
} = require("vuepress-theme-hope");

const navBarConfig = require("./navBar");
const sideBarConfig = require("./sideBar");

module.exports = config({
    title: 'Frosted Glass UI',
    description: '磨砂玻璃样式的 UI 组件库，基于 Vue.js 2.X',
    base:"/frosted-glass-ui/",
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            {
                rel: 'icon',
                href: '/favicon.ico'
            }
        ]
    ],
    port: 9999,
    plugins: [],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Frosted Glass UI',
            description: '磨砂玻璃样式的 UI 组件库，基于 Vue.js 2.X'
        }
    },
    themeConfig: {
        logo: '/logo.png',
        author: 'laohei',
        hostname: "https://laohei.vip",

        nav: navBarConfig.zh,
        sidebar: sideBarConfig.zh,

        locales: {},

        footer: {
            display: true,
            copyright: "*** | Copyright © 2021-present laohei",
        },
        git: {
            timezone: "Asia/Shanghai",
        },
        mdEnhance: {
            enableAll: true,
        },
        pwa: false,
    }
});