const mix = require('laravel-mix');

// Enable the long-term caching which enables file hashing that Laravel Mix provides.
mix.inProduction() ? serveProductionMode() : serveDevelopmentMode();

function serveDevelopmentMode() {
    mix.sass("src/scss/main.scss", "dist").options({
        postCss: [
            require('postcss-custom-properties')({
                preserve: false
            })
        ],
        autoprefixer: {
            options: {
                browsers: [
                    'last 6 versions',
                ]
            }
        },
    }).ts('src/index.ts', 'dist');
}

function serveProductionMode() {
    mix.sass("src/scss/main.scss", "dist").options({
        processCssUrls: false,
        terser: {},
        purifyCss: false,
        postCss: [require('autoprefixer')],
        clearConsole: false,
        cssNano: {
            discardComments: { removeAll: true },
        },
        postCss: [
            require('postcss-custom-properties')({
                preserve: false
            })
        ],
        autoprefixer: {
            options: {
                browsers: [
                    'last 6 versions',
                ]
            }
        },
    }).ts('src/index.ts', 'dist').version();
}