var gulp = require('gulp');
var browserSync = require('browser-sync').create();
// var reload = browserSync.reload;

//HTML task
gulp.task('html', function() {
    gulp.src('public/**/*.html');
});

//Watcher
gulp.task('watch', function() {
    gulp.watch('public/**/*.html', ['html']);
});

//Browser Sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./public/"
        }
    });
});

//Default
gulp.task('default', ['html', 'browser-sync', 'watch']);