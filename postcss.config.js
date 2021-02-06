const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const easyImport = require("postcss-easy-import");
const nesting = require("postcss-nesting");
const usedcss = require("usedcss");

module.exports = ({ env }) => ({
    plugins: [
        easyImport(),
        autoprefixer(),
        nesting(),
        env === 'production' ? cssnano() : false,
        env === 'production' ? usedcss({
            html: ["templates/**/*.html"],
            js: ["assets/scripts/**/*.ts"]
        }) : false,
    ]
});
