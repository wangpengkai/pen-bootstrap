var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

var paths = {
    scripts: ['build/js/**/*.coffee'],
    images: ['build/img/**/*', '!build/images/*.+(psd|psde)'],
    less: ['build/css/**/*.less'],
    styles: ['build/css/**/*.css', '!build/css/*.min.css'],
    html: ['build/html/**/*.html']
}

gulp.task('images', function(){
    gulp.src(paths.images)
     .pipe(plugins.imagemin({optimizationLevel: 5}))
     .pipe(gulp.dest('dist/img'))
});

gulp.task('styles', function(){
    gulp.src(paths.styles)
     .pipe(plugins.cssmin())
     .pipe(plugins.rename({suffix: '.min'}))
     .pipe(gulp.dest('dist/css'))
});

gulp.task('html', function(){
    gulp.src(paths.html)
     .pipe(plugins.htmlhint())
     .pipe(plugins.htmlhint.reporter())
     .pipe(gulp.dest('dist/html'))
});

gulp.task('watch', function(){
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', function(){
    //default task
});
