const gulp = require("gulp");
const watch = require("gulp-watch");
const browserSync = require("browser-sync").create();

gulp.task("watch", () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  });

  watch("./index.html", () => {
    browserSync.reload();
  });

  watch("./sass/**/*.scss", () => {
    gulp.start("cssInject");
  });

  watch("./scripts/temp/**/*.js", () => {
    gulp.start("scriptsRefresh");
  });
});

gulp.task("cssInject", ["autoprefixer"], () => {
  return gulp.src("./css/style.css").pipe(browserSync.stream());
});

gulp.task("scriptsRefresh", ["scripts"], () => {
  browserSync.reload();
});
