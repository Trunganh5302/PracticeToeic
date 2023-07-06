const CRUDtest = require('../Service/CRUDtest')

let getAllTests = async (req, res) => {
    try {
        let dataTest = await CRUDtest.getAlltest()
        res.status(201).json(dataTest)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllTests:getAllTests
}