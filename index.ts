import express, { Express, Request, Response, Router } from 'express'

const app: Express = express()
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
})
/**
 * 使用路由模块
 */
import { ListRouter } from './routers/List'
app.use('/api', ListRouter)
app.listen(3031, () => {
    console.log('success server http://localhost:3031');
})