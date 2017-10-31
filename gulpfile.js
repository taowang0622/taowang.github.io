var gulp = require('gulp'),
    browserSync = require("browser-sync");

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });

    // Watch files, reload on change
    gulp.watch(['index.html', 'css/**']).on('change', browserSync.reload);
});

gulp.task('default', function () {
    gulp.run('browser-sync');
});