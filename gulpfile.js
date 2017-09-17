var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var protractor = require("gulp-protractor").protractor;

gulp.task('default', function () {
    nodemon({
        script: 'index.js',
        ext: 'js',
        env: {
            PORT: 9000
        },
        ignore: ['./node_modules/**']
    }).on('restart', function () {
        console.log('Server Restarted . . .')
    })
})

gulp.task('test', function () {
    console.log('Started running test cases . . .');
    gulp.src(["./tests/e2e/*.js"])
        .pipe(protractor({
            configFile: "tests/conf.js",
        }))
        .on('error', function (e) { throw e })
    console.log("Finished executing test cases . . .")
})