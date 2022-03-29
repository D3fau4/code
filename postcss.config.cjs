const config = {
  plugins: [
    require('postcss-import-ext-glob'),
    require('postcss-import'),
    require('postcss-strip-inline-comments'),
    require('postcss-extend-rule'),
    require('postcss-nested'),
    require('postcss-preset-env'),
    require('postcss-pxtorem'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'development' && require('cssnano')({
      preset: 'default',
    })
  ],
};

module.exports = config;
