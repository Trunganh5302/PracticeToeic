const db = require('../models/index')

let getAlltest = () => {
    return new Promise(async (resolve,reject) =>{
        try {
            let data = await db.User.findAll()
            console.log("Lấy dữ liệu thành công")
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let getAllpart = () =>{
    return new Promise(async (resolve, reject) =>{
        try {
            let data = await db.Part.findAll()
            console.log("Lấy dữ liệu từ bảng part thành công")
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

let getAllQuestion = () =>{
    return new Promise(async (resolve, reject) =>{
        try {
            let data = await db.Question.findAll()
            console.log("Lấy dữ liệu từ bảng Question thành công")
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getAlltest:getAlltest,
    getAllpart:getAllpart,
    getAllQuestion:getAllQuestion
}