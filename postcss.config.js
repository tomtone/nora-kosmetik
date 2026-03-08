module.exports = {
  plugins: [
    require('cssnano')({
      preset: ['advanced', {
        discardComments: { removeAll: true },
        mergeRules: true,
        minifySelectors: true,
        reduceIdents: true,
      }],
    }),
  ],
};
