var gulp = require('gulp'),
minifyHtml = require("gulp-minify-html");
gulp.task('myminifyhtml', function () {
    gulp.src('*.html') // 要压缩的html文件
    .pipe(minifyHtml()) //压缩
    .pipe(gulp.dest('dist/html'));
//  .pipe(connect.reload());
});
gulp.task('default',['myminifyhtml']);