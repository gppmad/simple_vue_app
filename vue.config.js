module.exports = {  
    // devServer: {
        
    //   proxy: {
    //     "^/api": {
    //       target: "http://localhost:5000/",
    //       changeOrigin: true,
    //       logLevel: "debug",
    //       pathRewrite: { "^/api": "" }
    //     }
    //   }
    // }
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }
    devServer: {
        proxy: {
          "/api": {
            target: "http://server:5000",
            timeout: 6000,
            secure: false,
            changeOrigin: true
          }
        }
    }
}