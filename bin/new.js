/**
 * 新建组件脚本
 */


console.log();
process.on("exit", () => {
    console.log();
})

if (!process.argv[2]) {
    console.error('\x1B[31m%s\x1B[0m', "[组件名] 必填 - 请填写组件名称");
    process.exit(1);
}

const path = require("path");
const fs = require("fs");
const fileSave = require("file-save");
const uppercamelcase = require("uppercamelcase");

// 组件名（小写）
const componentName = process.argv[2];
console.log("🚀 componentName :", componentName);
// 组件名（中文）
const chineseName = process.argv[3];
console.log("🚀 chineseName :", chineseName);
// 组件名（驼峰）
const ComponentName = uppercamelcase(componentName);
console.log("🚀 ComponentName :", ComponentName);

const PackagePath = path.resolve(__dirname, "../../src/packages", componentName);
console.log("🚀 PackagePath :", PackagePath);
console.log();

// 需要新创建的文件
const Files = [{
        filename: "index.js",
        content: `import ${ComponentName} from './${componentName}.vue'

${ComponentName}.install = function (Vue) {
    Vue.component(${ComponentName}.name, ${ComponentName})
}

export default ${ComponentName}
`
    },
    {
        filename: `${componentName}.vue`,
        content: `<template>
    <div class="fg-${componentName}">
        ${ComponentName} ${chineseName}
    </div>
</template>

<script>
export default {
	name: "Fg${ComponentName}",
}
</script>
`
    },
    {
        filename: path.join("../../../docs/components", `${componentName}.md`),
        content: `# ${componentName} ${chineseName}`
    },
    {
        filename: path.join("../../../src/styles", `${componentName}.scss`),
        content: `/*
 * ${componentName}.scss
 */
@charset "UTF-8";
@import "./common/var.scss";
@import "./mixins/mixins.scss";


@include b(${componentName}) {
    
}`
    }
]



/**
 * 添加 新组件名 和 package 路径 到 components.json
 */
const componentsFile = require('../components.json')
if (componentsFile[componentName]) {
    console.error('\x1B[31m%s\x1B[0m', `${componentName} 已存在.`);
    process.exit(1);
}
componentsFile[componentName] = `packages/${componentName}/index.js`;
fileSave(path.join(__dirname, '../components.json'))
    .write(JSON.stringify(componentsFile, null, '    '), 'utf8')



/**
 * 添加 新组件样式 到 index.scss
 */
const sassPath = path.join(__dirname, '../../src/styles/index.scss');
const sassImportText = `${fs.readFileSync(sassPath)}@import "./${componentName}.scss";`;
fileSave(sassPath)
    .write(sassImportText, 'utf8')
    .end('\n');



/**
 * 创建对应组件 package 文件
 */
Files.forEach(file => {
    fileSave(path.join(PackagePath, file.filename))
        .write(file.content, 'utf8')
        .end('\n');
})



/**
 * 添加 新组件注册 到 index.js
 */
const indexFilePath = path.join(__dirname, '../../src/index.js')

let indexFileText = `${fs.readFileSync(indexFilePath)}`

// 匹配文件中最后一个 import 的 js 文件名字的字符串索引
const importIndex = indexFileText.lastIndexOf('index.js') + 11;
// 插入 import 字符串在对应的索引后面
const importString = `import ${ComponentName} from "./packages/${componentName}/index.js";`;
indexFileText = indexFileText.slice(0, importIndex) + importString + '\n' + indexFileText.slice(importIndex);

// 匹配文件中 第一个 components 后面的 ]; 的索引
const componentsIndex = indexFileText.indexOf('];')
// 插入 组件名字 到 components 数组最后一个
const componentsString = `    ${ComponentName}`;
indexFileText = indexFileText.slice(0, componentsIndex - 1) + ',\n' + componentsString + '\n' + indexFileText.slice(componentsIndex);

// 匹配文件的 倒数第二行
const exportIndex = -2
// 插入 组件名字 到 export 最后一个
const exportString = `    ${ComponentName},`;
indexFileText = indexFileText.slice(0, exportIndex) + exportString + '\n' + indexFileText.slice(exportIndex);

fileSave(indexFilePath)
    .write(indexFileText, 'utf8')



/**
 * 添加 新组件文档菜单 到 componentPages.json
 */
const componentPagesFile = require('../../docs/.vuepress/componentPages.json')
Object.keys(componentPagesFile).forEach(lang => {
    let components = componentPagesFile[lang]['/components/'];
    components[components.length - 1].children.push(`${componentName}`)
});
fileSave(path.join(__dirname, '../../docs/.vuepress/componentPages.json'))
    .write(JSON.stringify(componentPagesFile, null, '    '), 'utf8')


console.log('\n \x1B[32m', "创建完成 \x1B[0m");