/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
"use strict";
var gulp = require('gulp'),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    cssImport = require("gulp-import-css"),
    minifyCSS = require("gulp-minify-css"),
    jsDest = "build/js/",
    cssDest = "build/css/",
    langDest = {
        zhCN: cssDest + "langs/zh-cn/",
        jaJP: cssDest + "langs/ja-jp/"
    };

gulp.task('js', function () {
    // place code for your default task here
    return gulp.src(["js/nav.js", "js/toggle.js"])
        .pipe(concat("zoaui.js"))
        .pipe(gulp.dest(jsDest))
        .pipe(uglify())
        .pipe(rename("zoaui.min.js"))
        .pipe(gulp.dest(jsDest));
});
gulp.task('css', function () {
    // place code for your default task here
    return gulp.src("css/imports/imports.css")
        .pipe(cssImport())
        .pipe(rename("zoaui.css"))
        .pipe(gulp.dest(cssDest))
        .pipe(minifyCSS())
        .pipe(rename("zoaui.min.css"))
        .pipe(gulp.dest(cssDest));
});
gulp.task('css/langs/zh-cn', function () {
    // place code for your default task here
    return gulp.src("css/langs/zh-cn/imports.css")
        .pipe(cssImport())
        .pipe(rename("zh-cn.css"))
        .pipe(gulp.dest(langDest.zhCN))
        .pipe(minifyCSS())
        .pipe(rename("zh-cn.min.css"))
        .pipe(gulp.dest(langDest.zhCN));
});
gulp.task('css/langs/ja-jp', function () {
    // place code for your default task here
    return gulp.src("css/langs/ja-jp/imports.css")
        .pipe(cssImport())
        .pipe(rename("ja-jp.css"))
        .pipe(gulp.dest(langDest.jaJP))
        .pipe(minifyCSS())
        .pipe(rename("ja-jp.min.css"))
        .pipe(gulp.dest(langDest.jaJP));
});

gulp.task("default", ["js", "css", "css/langs/zh-cn", "css/langs/ja-jp"]);