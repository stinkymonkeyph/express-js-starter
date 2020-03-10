const firebird = require('node-firebird')
const config  = require('./config')
const { db: options } = config

const connect = async () => {
    return new Promise((resolve, reject) => {
        firebird.attach(options, (err, db) => {
            if (err) throw err
            resolve(db)
        })
    })
}

const convertToStr = ($arr) => {

    if(typeof $arr !== 'undefined') {
        $arr.forEach(function(eachObj) {
            for (var key in eachObj) {
                if (eachObj.hasOwnProperty(key)) {
                if (Buffer.isBuffer(eachObj[key]))
                    eachObj[key] = Buffer.from(eachObj[key], "binary").toString("utf8")
                }
            }
        })    
    }
    return $arr
}

const query = async (statement, parameter = []) => {
    const db = await connect()
    return new Promise((resolve, reject)=> {
        db.query(statement, parameter, (err, res) => {
            if (err) throw err
            db.detach()
            const data = convertToStr(res)
            resolve(data)
        })
    })
}

module.exports = { query }