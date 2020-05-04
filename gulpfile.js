const gulp = reguire('gulp');
const browserSync = reguire('browser-sync').create();
gulp.task('Hello!', function(done) {
    console.log('Hello, Vitaliy!');
    done();
});
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

