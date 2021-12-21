import AbcTest from "./packages/abc-test/index.js";
import BcdTest from "./packages/bcd-test/index.js";
import Button from "./packages/button/index.js";

const components = [
    AbcTest,
    BcdTest,
    Button
];

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

// export default install
export default {
    install,
    AbcTest,
    BcdTest,
    Button,
};