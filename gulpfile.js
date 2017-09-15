var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function(){
    nodemon({
        script: 'index.js',
        ext: 'js',
        env: {
            PORT: 9000
        },
        ignore: ['./node_modules/**']
    }).on('restart', function(){
        console.log('Server Restarted . . .')
    })
})

gulp.task('test', function(){
    
    console.log('Started running test cases . . .');
})