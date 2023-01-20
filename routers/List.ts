import express, { Router } from 'express'
import axios from 'axios'
export const ListRouter: Router = express.Router();
ListRouter.get('/list', async (req, res) => {
    console.log('接口正在被调用');
    const result = await axios.get('https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=334838012186')
    let temp = result.data.data.areaTree[2]
    result.data.data = temp
    res.json({
        data: result.data
    })
})