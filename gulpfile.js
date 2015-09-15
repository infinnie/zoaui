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
    cssDest = "build/css/";

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
    //.pipe(uglify())
    //.pipe(rename("zoaui.min.js"))
    //.pipe(gulp.dest(cssDest));
});
gulp.task("default", ["js", "css"]);