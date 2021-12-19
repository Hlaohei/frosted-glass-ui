import AbcTest from './abc-test.vue'

AbcTest.install = function (Vue) {
    Vue.component(AbcTest.name, AbcTest)
}

export default AbcTest