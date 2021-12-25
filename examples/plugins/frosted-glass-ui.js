/**
 * TODO: 测试 按需引入组件
 */
import Vue from 'vue'

// TODO: 没有解决按需引入样式的问题
import 'frosted-glass-ui/lib/styles/frosted-glass-ui.css'

import {
    Button
} from 'frosted-glass-ui'
// var FrostedGlassUI = require('frosted-glass-ui')
// Vue.use(FrostedGlassUI)

Vue.use(Button)