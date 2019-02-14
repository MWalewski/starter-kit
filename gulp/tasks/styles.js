const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

sass.compiler = require("node-sass");

gulp.task("autoprefixer", ["compile-sass"], () =>
  gulp
    .src("./css/style.css")
    .pipe(
      autoprefixer({
        browsers: ["last 10 versions"],
        cascade: false
      })
    )
    .pipe(concat("style.css"))
    .pipe(gulp.dest("./css"))
);

gulp.task("compile-sass", () => {
  return gulp
    .src("./sass/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("style.css"))
    .pipe(gulp.dest("./css"));
});
