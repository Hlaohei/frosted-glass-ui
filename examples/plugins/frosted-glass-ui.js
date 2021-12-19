/**
 * TODO: 测试 按需引入组件
 */
import Vue from 'vue'

// TODO: 没有解决按需引入样式的问题
import 'frosted-glass-ui/lib/styles/frosted-glass-ui.css'

import {
    AbcTest,
    BcdTest
} from 'frosted-glass-ui'
// var FrostedGlassUI = require('frosted-glass-ui')
// Vue.use(FrostedGlassUI)

// import AbcTest from 'frosted-glass-ui/lib/abc-test.js'
// import 'frosted-glass-ui/lib/styles/abc-test.css'

// import BcdTest from 'frosted-glass-ui/lib/bcd-test.js'
// import 'frosted-glass-ui/lib/styles/bcd-test.css'

// var AbcTest = require('frosted-glass-ui/lib/abc-test.js')
// require('frosted-glass-ui/lib/styles/abc-test.css')

// var BcdTest = require('frosted-glass-ui/lib/bcd-test')
// require('frosted-glass-ui/lib/styles/bcd-test.css')

Vue.use(AbcTest)
Vue.use(BcdTest)