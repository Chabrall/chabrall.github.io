var gulp    = require('gulp'),
    compass = require('gulp-compass'),
    uglify  = require('gulp-uglify');

gulp.task('compass', function(){
    return gulp.src('./dev/sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'css',
            sass: 'dev/sass/'
        }))
        .pipe(gulp.dest('css'));
});


gulp.task('scripts', function(){
    return gulp.src('./dev/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});


gulp.task('watch', function(){
    gulp.watch('./dev/js/*.js', ['scripts']);
    gulp.watch('./dev/sass/*.scss', ['compass']);
});

gulp.task('default', ['compass', 'scripts', 'watch']);
