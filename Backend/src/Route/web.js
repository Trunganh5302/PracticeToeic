const express = require('express')
const HomeController = require('../Controller/HomeController')

let app = express()
let router = express.Router()

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send("Trang chu")
    })

    router.get('/api/test', HomeController.getHomePage)
    router.get('/api/part', HomeController.getPartDetail)

    return app.use("/", router)
}


module.exports = initWebRoutes