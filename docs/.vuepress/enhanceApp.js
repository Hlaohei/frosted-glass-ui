/**
 * 文档添加 Vue 组件支持
 */


// 开发路径引入
import FrostedGlassUI from "../../src/index.js"
import "../../src/styles/index.scss"

// 打包后路径引入
// import FrostedGlassUI from "../../lib/frosted-glass-ui.min"
// import "../../lib/styles/frosted-glass-ui.css"

export default ({
    Vue,
    options,
    router,
}) => {
    Vue.use(FrostedGlassUI)
}