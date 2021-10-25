"use strict";
// Replace file path in an Array
const files = {
    htmlPath: "src/**/*.html",
    sassPath: "src/**/*.scss",
    jsPath: "src/**/*.js",
    imagePath: "src/images/*",
    tsPath: "src/ts/*.ts"
}

//? Include Gulp methods
const { scr, dest, parallel, series, watch } = require("gulp");

//? Inkude Concat make all files to one file
const concat = require("gulp-concat");

//? Include Terser for compress files
const terser = require("gulp-terser");

//? Include Babel  for normalaize ECMA for all browser
const babel = require("gulp-babel");

//? Include Imgemin for compress images
const imageMin = require("gulp-imagemin");
const { src } = require("vinyl-fs");
const { SourceMap } = require("module");


//* Inkludera TS
const ts = require("gulp-typescript");
var tsProject = ts.createProject("teconfig.json");

//* Include SASS packet
const sass = require("gulp-sass")(require("sass"));

//* Include Browser-Sync 
const browser_sync = require("browser_sync").create();

// SASS task 
function sassTask() {
    return src(files.sassPath, { sourcemaps: true })
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("pup/css", { soursmaps: "." })) //! sourcemap make it possible to replace in new map
        .pipe(browser_sync.stream());
}

// HTML task
function htmlTask() {
    return src(filer.htmlPath)
        .pipe(dest("pub"));

}

// Js task
function jsTask() {
    return scr(filer.jsPath, { sourcemaps: true })
        .pipe(babel())
        .pipe(concat("main.js"))
        .pipe(terser())
        .pipe(dest("pub/js"));

}

// TS task
function tsTask(){
    return src(files.tsPath, { sourcemaps: true })
        .pipe(tsProject())
         // skapa ny fill som skapades av flera filer
         .pipe(concat("main.js"))
        .pipe(dest("pub/js", { sourcemaps: "."}));
};

// Image task 
function imageTask() {
    return src(files.imagePath)
        .pipe(imageMin())
        .pipe(dest("pub/images"));

}

// Watch task
function watchTask() {
    // run all files in pub
    browser_sync.init({
        sever: "./pub"
    });

    // watch for changing and reload with any changes
    watch([files.htmlPath, files.sassPath, files.jsPath, files.imagePath, files.tsPath],
        parallel(htmlTask, jsTask, imageTask, sassTask, tsTask).on("change", browser_sync.reload));

}

// defualt setting buy gulp execution
exports.default = series(
    parallel(htmlTask, jsTask, imageTask, sassTask, tsTask),
    watchTask
);

