import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 开发路径引入
import FrostedGlassUI from "../src/index.js"
import "../src/styles/index.scss"
Vue.use(FrostedGlassUI)

// 打包后路径引入
// import "./frosted-glass-ui.js"
// import "../lib/styles/frosted-glass-ui.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')