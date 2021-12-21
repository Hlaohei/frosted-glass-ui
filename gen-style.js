/*
 * 样式打包
 */


const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const components = require('./components.json');

function buildCss(cb) {
    gulp.src('../src/styles/index.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename('frosted-glass-ui.css'))
        .pipe(gulp.dest('../lib/styles'));
    cb();
}

function buildSeperateCss(cb) {
    Object.keys(components).forEach(componentName => {
        gulp.src(`../src/styles/${componentName}.scss`)
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(cleanCSS())
            .pipe(rename(`${componentName}.css`))
            .pipe(gulp.dest('../lib/styles'));
    });
    cb();
}

exports.default = gulp.series(buildCss, buildSeperateCss);