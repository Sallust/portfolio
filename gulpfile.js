'use strict';

var gulp = require('gulp');

var inline = require('gulp-inline');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

var htmlmin = require('gulp-htmlmin');
var jshint = require('gulp-jshint');

//var del = require('del');
var browserSync = require("browser-sync");

var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('optimize-stack', function() {
	gulp.src('src/index.html')
	.pipe(inline({
		js: uglify,
		css:minifyCss,
		disabledTypes: ['svg','img']
		//ignore: ['js/lib/knockout-3.4.0.js', 'src/css/lib', 'js/analytics.js']
	}))
	.pipe(htmlmin({
		collapseWhitespace: true,
	}))
	.pipe(gulp.dest('dist'));
})

gulp.task('inline', function() {
	gulp.src('src/index.html')
	.pipe(inline({
		js: uglify,
		css:minifyCss,
		disabledTypes: ['svg','img'],
		ignore: ['src/js/lib/knockout-3.4.0.js', 'src/css/lib']
	}))
	.pipe(gulp.dest('dist'))
})

gulp.task('minify-html', function() {
	gulp.src('src/index.html')
	.pipe(htmlmin({
		collapseWhitespace: true,
		removeComments: true
	}))
	.pipe(gulp.dest('dist'));
})

gulp.task('lint', function() {
    return gulp.src('src/js/app.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('resize', function () {
  gulp.src('src/img/compass.png')
    .pipe(imageResize({
    	width : 40,
    	imageMagick : true
    	//format: 'jpeg'
    	 }))
    .pipe(imagemin())
    .pipe(rename({
    	suffix: '-40'
    }))
    .pipe(gulp.dest('src/img/min'));
});

gulp.task('resize-port-imgs', function () {
  gulp.src('src/img/port-img/*')
    .pipe(imageResize({
    	width : 500,
    	imageMagick : true,
    	format: 'jpeg'
    	 }))
    .pipe(imagemin())
    .pipe(rename({
    	suffix: '-500'
    }))
    .pipe(gulp.dest('src/img/min'));
});

var resizeImageTasks = [];

[520,830,1250].forEach(function(size) {
	var resizeImage = 'resize_'+ size;
	gulp.task(resizeImage, function() {
		return	gulp.src('src/img/dcmapblueblur.png')
			.pipe(imageResize({
				width: size,
				imageMagick : true,
				format: 'jpeg'
			}))
			.pipe(imagemin())
			.pipe(rename({
				suffix: '-'+ size
			}))
			.pipe(gulp.dest('src/img/min'))
	});
	resizeImageTasks.push(resizeImage);
});

gulp.task('resize-images', resizeImageTasks);


gulp.task('watch', function() {
    gulp.watch('src/index.html', ['optimize-stack']);
});



gulp.task('brow-sync', function() {
	browserSync.init({
		server:{
			baseDir: "src"
		},
		port: 9000,
		socket: {
			domain: 'http://localhost:9000'
		},
		files: ['./src/index.html', './src/css/*.css']
	});
	//gulp.watch()
});

gulp.task('default', ['lint', 'optimize-stack', 'watch']);

