const gulp = require('gulp');
const concat = require('gulp-concat-css');
const plumber = require('gulp-plumber');
const del = require('del');
const browserSync = require('browser-sync').create(); 


function html() {
    return gulp.src('src/**/*.html')
          .pipe(plumber())
                  .pipe(gulp.dest('dist/'))
  }
  
  exports.html = html;

  function css() {
    return gulp.src('src/styles/**/*.css')
          .pipe(plumber())
          .pipe(concat('bundle.css'))
                  .pipe(gulp.dest('dist/'))
  }
  
  exports.css = css;

  function images() {
    return gulp.src('src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}')
              .pipe(gulp.dest('dist/images'))
  }
  
  exports.images = images; 

  function fonts() {
    return gulp.src('src/fonts/**/*.{woff2,woff,css}')
              .pipe(gulp.dest('dist/fonts'))
  }
  
  exports.fonts = fonts; 

  function svg() {
    return gulp.src('src/svg/**/*.svg')
              .pipe(gulp.dest('dist/svg'))
  }
  
  exports.svg = svg; 

  function scripts() {
    return gulp.src('src/scripts/**/*.js')
              .pipe(gulp.dest('dist/scripts'))
  }
  
  exports.scripts = scripts; 

  function clean() {
    return del('dist');
  }
  
  exports.clean = clean; 


  const build = gulp.series(clean, gulp.parallel(html, css, images, fonts, svg, scripts));

  exports.html=html;
  exports.css=css;
  exports.images=images;
  exports.fonts=fonts;
  exports.svg=svg;
  exports.scripts=scripts;

exports.build = build;

function watchFiles() {
    gulp.watch(['src/**/*.html'], html);
    gulp.watch(['src/styles/**/*.css'], css);
    gulp.watch(['src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}'], images);
    gulp.watch(['src/fonts/**/*.{woff2,woff,css']);
    gulp.watch(['src/svg/**/*.svg']);
    gulp.watch(['src/scripts/**/*.js']);
  }
  const watchapp = gulp.parallel(build, watchFiles);
  
  exports.watchapp = watchapp;