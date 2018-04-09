/**
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

'use strict';

// This gulpfile makes use of new JavaScript features.
// Babel handles this without us having to do anything. It just works.
// You can read more about the new JavaScript features here:
// https://babeljs.io/docs/learn-es2015/

import path from 'path';
import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import swPrecache from 'sw-precache';
import gulpLoadPlugins from 'gulp-load-plugins';
import {output as pagespeed} from 'psi';
import pkg from './package.json';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;



//設定壓縮圖片的路徑
const imagesPaths = [
    {src: 'src/common/img/**/*', dest: 'src/common/img'},
    {src: 'src/zh-cn/img/**/*', dest: 'src/zh-cn/img'},
];



//===============================================
//               Lint JavaScript
//===============================================
// gulp.task('lint', () =>
//     gulp.src(['src/common/js/**/*.js', '!node_modules/**'])
//         .pipe($.eslint())
//         .pipe($.eslint.format())
//         .pipe($.if(!browserSync.active, $.eslint.failAfterError()))
// );




//===============================================
//                Optimize images
//===============================================
gulp.task('images', () => {
    imagesPaths.map(function(row,i){
        gulp.src(row.src)
            .pipe($.if('*.{git,svg}', $.imagemin({
                progressive: true,
                interlaced: true
            })))
            .pipe($.if('*.{jpg,png}', $.smushit({
                verbose: true
            })))
            .pipe(gulp.dest(row.dest))
            .pipe($.size({title: 'common/img'}));
    });
});




//===============================================
// Compile and automatically prefix stylesheets
//===============================================
gulp.task('styles', () => {
    const AUTOPREFIXER_BROWSERS = [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
    ];

    // For best performance, don't add Sass partials to `gulp.src`
    return gulp.src([
        'src/common/style/scss/dist/**/*.scss'
    ])
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            precision: 10
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        // Concatenate and minify styles
        .pipe($.if('*.css', $.cssnano()))
        .pipe($.size({title: 'styles'}))   //顯示檔案大小
        .pipe($.sourcemaps.write('./'))    //產生source-map
        .pipe(gulp.dest('src/common/style/css/dist')) //產生對應的根目錄
});



//===============================================
// Concatenate and minify JavaScript. Optionally transpiles ES2015 code to ES5.
// to enable ES2015 support remove the line `"only": "gulpfile.babel.js",` in the
//===============================================
// `.babelrc` file.
// gulp.task('scripts', () =>
//     gulp.src([
//       // Note: Since we are not using useref in the scripts build pipeline,
//       //       you need to explicitly list your scripts here in the right order
//       //       to be correctly concatenated
//       './app/scripts/main.js'
//       // Other scripts
//     ])
//       .pipe($.newer('.tmp/scripts'))
//       .pipe($.sourcemaps.init())
//       .pipe($.babel())
//       .pipe($.sourcemaps.write())
//       .pipe(gulp.dest('.tmp/scripts'))
//       .pipe($.concat('main.min.js'))
//       .pipe($.uglify({preserveComments: 'some'}))
//       // Output files
//       .pipe($.size({title: 'scripts'}))
//       .pipe($.sourcemaps.write('.'))
//       .pipe(gulp.dest('dist/scripts'))
//       .pipe(gulp.dest('.tmp/scripts'))
// );


//===============================================
//   Scan your HTML for assets & optimize them
//===============================================
gulp.task('html', () => {
    return gulp.src('src/**/*.html')
        .pipe($.useref({
            searchPath: '{src}',
            noAssets: true
        }))

        // Minify any HTML
        .pipe($.if('*.html', $.htmlmin({
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeOptionalTags: true
        })))
        // Output files
        .pipe($.if('*.html', $.size({title: 'html', showFiles: true})))
        .pipe(gulp.dest('dist'));
});

// Clean output directory
// gulp.task('clean', () => del(['.tmp', 'dist/*', '!dist/.git'], {dot: true}));

// Watch files for changes & reload
gulp.task('serve', ['styles'], () => {
    browserSync({
        open: false,
        notify: false,
        // Customize the Browsersync console logging prefix
        logPrefix: 'WSK',
        // Allow scroll syncing across breakpoints
        scrollElementMapping: ['main', '.mdl-layout'],
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        server: ['src'],
        port: 3000
    });

    gulp.watch(['src/**/*.html'], reload);
    gulp.watch(['src/common/style/scss/**/*.{scss,css}'], ['styles', reload]);
    gulp.watch(['src/common/js/**/*.js'], reload);
});


