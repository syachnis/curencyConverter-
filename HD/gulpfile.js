/**
 * Created by syachnis on 17-01-30.
 */
var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var scripts = ['bower' , 'index'];

gulp.task('default' , scripts);

// inject bower
gulp.task('bower', function () {
    console.log(' Started inject bower components  ');
    gulp.src('./app/index.html')
        .pipe(wiredep({
            optional: 'configuration',
            goes: 'here'
        }))
        .pipe(gulp.dest('./app'));
});

// inject my own
gulp.task('index', function () {
    console.log(' Started inject my components  ');
    var target = gulp.src('./app/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src([ './app/app.js' , './app/src/**/*.js', './app/src/**/*.css'], {read: false} );
    return target.pipe(inject(sources , {relative: true}))
        .pipe(gulp.dest('./app'));
});

// gulp watch
gulp.task('watch', function(){
    gulp.watch();
});

//scripts test gulp
gulp.task('scripts' , function(){
    console.log(' Hello Stas ');
});



