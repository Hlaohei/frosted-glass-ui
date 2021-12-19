const {
    navbarConfig
} = require("vuepress-theme-hope");

module.exports = {
    zh: navbarConfig([{
            text: '首页',
            link: '/'
        },
        {
            text: '指南',
            link: '/guide/'
        },
        {
            text: '组件',
            link: '/components/'
        },
        {
            text: 'laohei.vip',
            link: 'https://laohei.vip'
        },
    ])
}