module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  lintOnSave: 'warning',
  publicPath: process.env.NODE_ENV === 'production' ? '/rapsodo-test-case/' : '/',
};
