const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const easyImport = require("postcss-easy-import");
const nesting = require("postcss-nesting");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = ({ env }) => ({
    parser: "postcss-scss",
    plugins: [
        easyImport(),
        autoprefixer(),
        nesting(),
        env === "production" ? cssnano({
            preset: ["default", {
                discardComments: { removeAll: true },
            }],
        }) : false,
        env === "production" ? purgecss({
            content: ["templates/**/*.html", "assets/scripts/**/*.ts"],
        }) : false,
    ]
});
