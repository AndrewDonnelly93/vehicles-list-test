const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const babel = require('babel-register');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const util = require('gulp-util');
const sass = require('gulp-sass');
const mocha = require('gulp-mocha');
const server = require('gulp-develop-server');

gulp.task('js', async function () {
  return browserify({ entries: './src/app.js', extensions: ['.js'], debug: true })
    .transform(babelify.configure({ presets: ['es2015', 'react', 'stage-2'] }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .on('error', util.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js:watch', async function () {
  return gulp.watch('./src/**/*.js', gulp.series('js'));
});

gulp.task('sass', async function () {
  return gulp.src('./src/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', async function () {
  return gulp.watch('./src/**/*.scss', gulp.series('sass'));
});

gulp.task('test', async () => {
  return gulp.src('./test/*.spec.js', { read: false })
    .pipe(mocha({
      compilers: babel,
      require: ['./setupTest.js']
    }));
});

gulp.task('server', async function () {
  return server.listen({ path: './index.js' });
});

gulp.task('server:watch', async function () {
  return gulp.watch(['./server.js'], server.restart);
});

gulp.task('default', async function () {
  return gulp.parallel(['sass', 'sass:watch', 'js', 'js:watch', 'server', 'server:watch']);
});
