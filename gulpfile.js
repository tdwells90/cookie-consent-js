// Load gulp
var gulp = require("gulp");

// SASS
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require("gulp-clean-css");
var purge = require("gulp-css-purge");
var sourcemaps = require("gulp-sourcemaps");

// JS
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");

// Utils
var fs = require("fs");

// Compile Sass
gulp.task("sass", function() {
	return gulp
		.src("scss/style.scss")
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				includePaths: ["./scss"],
				errLogToConsole: true,
				outputStyle: "compressed"
			})
		)
		.pipe(cleanCSS())
		.pipe(
			purge({
				trim: true,
				shorten: true,
				verbose: true
			})
		)
		.on("error", console.error.bind(console))
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions", "> 5%", "Firefox ESR"]
			})
		)
		.pipe(concat("cookie-consent-init.css"))
		.pipe(gulp.dest("./cookie-consent-gtm/css/"));
});

// JS
gulp.task("compress", function() {
	return gulp
		.src("cookie-plugin.js")
		.pipe(
			babel({
				presets: [
					[
						"env",
						{
							modules: false,
							targets: {
								browsers: ["last 3 versions", "ie >= 11"]
							}
						}
					]
				]
			})
		)
		.pipe(concat("cookie-consent-init.js"))
		.pipe(uglify())
		.pipe(gulp.dest("./cookie-consent-gtm/js/"));
});

// Watch Files For Changes
gulp.task("watch", function() {
	gulp.watch("scss/**/*.scss", { interval: 750 }, ["sass"]);
	gulp.watch("./*.js", { interval: 1000 }, ["compress"]);
});

// Default Task
gulp.task("default", ["sass", "compress", "watch"]);
