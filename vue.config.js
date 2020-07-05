module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    devServer: {
        host: 'localhost',
        open: false,
        overlay:{
            warnings:false,
            errors:true
        },
        proxy:{
            '/api/table':{
                target:'http://127.0.0.1:8082/api/table',
                changeOrigin: true,
                pathRewrite:{  // 路径重写，
                    '^/api/table': ''
                }
            },
            '/api/menu':{
                target:'http://127.0.0.1:8082/api/menu',
                changeOrigin: true,
                pathRewrite:{  // 路径重写，
                    '^/api/menu': ''
                }
            }
        }
    },
    lintOnSave:false
}