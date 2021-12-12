import AbcTest from "./packages/abc-test";

const components = {
    FgAbcTest: AbcTest,
};

const install = (Vue = {}) => {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key]);
    });
};

export default install;