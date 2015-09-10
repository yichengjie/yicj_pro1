// seajs 的简单配置
seajs.config({
    base: "./static/",
    alias: {
        "jquery": "jquery/1.10.1/jquery-1.8.2.js"
    }
})
// 加载入口模块
seajs.use("app/app")