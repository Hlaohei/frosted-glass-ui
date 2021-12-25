import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 开发路径引入
import FrostedGlassUI from "../src/index.js"
import "../src/styles/index.scss"
Vue.use(FrostedGlassUI)

// npm 包引入
// import "./plugins/frosted-glass-ui.js"
// import FrostedGlassUI from 'frosted-glass-ui'
// import 'frosted-glass-ui/lib/styles/frosted-glass-ui.css'
// Vue.use(FrostedGlassUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')