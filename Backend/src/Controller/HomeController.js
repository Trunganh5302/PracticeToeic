const CRUDtest = require('../Service/CRUDtest')

let getHomePage = async (req, res) => {
    try {
        let data = await CRUDtest.getAlltest()
        res.status(201).json(data)
    } catch (error) {
        console.log(error)
    }
}

let getPartDetail = async (req, res) => {
    try {
        let datas = await CRUDtest.getAllpart()
        let data = await CRUDtest.getAllQuestion()
        let dataResource = {
            datas:datas,
            data:data
        }
        res.status(201).json(dataResource)
    } catch (error) {
        console.log(error)
    }
}

let getQuestionDetail = async (req, res) => {
    try {
        let data = await CRUDtest.getAllQuestion()
        res.status(201).json(data)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getHomePage:getHomePage,
    getPartDetail:getPartDetail,
    getQuestionDetail:getQuestionDetail
}