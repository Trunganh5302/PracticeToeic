const express = require('express')
const HomeController = require('../Controller/HomeController')
const TestController = require('../Controller/TestController')


let app = express()
let router = express.Router()

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send("Trang chu")
    })

    router.get('/api/test', TestController.getAllTests)
    router.get('/api/part', HomeController.getPartDetail)

    return app.use("/", router)
}


module.exports = initWebRoutes