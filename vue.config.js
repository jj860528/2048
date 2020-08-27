module.exports = {
    publicPath: '/2048',
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}