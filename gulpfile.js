const { src, dest, watch, parallel, series } = require("gulp");

// Gulp plugins
const gclean = require("gulp-clean");
const gulpif = require("gulp-if");
const imagemin = require("gulp-imagemin");
const postcss = require("gulp-postcss");
const run = require("gulp-run-command").default;
const terser = require("gulp-terser");
const ts = require("gulp-typescript");

const PRODUCTION = process.env.NODE_ENV === 'production';

// Task to clean output directory
function clean() {
    return src("static/", { read: false, allowEmpty: true })
        .pipe(gclean());
}

// Task to transpile and minify scripts
const SCRIPTS_SRC = "assets/scripts/**/*.ts";
const tsProject = ts.createProject("tsconfig.json");
const TERSER_CONFIG = {
    mangle: {
        module: true
    }
};
function build_scripts() {
    return src(SCRIPTS_SRC)
        .pipe(tsProject())
        .pipe(gulpif(PRODUCTION, terser(TERSER_CONFIG)))
        .pipe(dest("static/scripts/"));
}

// Task to process styles
const STYLES_SRC = "assets/styles/**/*.css";
function build_styles() {
    return src("assets/styles/main.css")
        .pipe(postcss())
        .pipe(dest("static/styles/"));
}

// Task to optimize images
const IMAGES_SRC = "assets/images/**/*.{png,jpe?g,gif,svg,webp}";
function build_images() {
    return src(IMAGES_SRC)
        .pipe(gulpif(PRODUCTION, imagemin([
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {cleanupIDs: false}
                ]
            })
        ])))
        .pipe(dest("static/images/"));
}

// Task to run zola build
function build_site() {
    return run("zola build")();
}

// Development watch tasks
function dev_watch() {
    if (PRODUCTION) {
        console.warn("Watching in production mode, this will slow down compilation times!");
    }

    // Watch for changes and call build functions
    watch(SCRIPTS_SRC, build_scripts);
    watch(STYLES_SRC, build_styles);
    watch(IMAGES_SRC, build_images);

    // Run Zola's development server
    run("zola serve")();
}

// Instead of using { ignoreInitial: false } in the watch functions, precompile to prevent Zola from having to reload
exports.dev = series(clean, parallel(build_scripts, build_styles, build_images), dev_watch);

exports.default = exports.build = series(clean, parallel(build_scripts, build_styles, build_images), build_site);
