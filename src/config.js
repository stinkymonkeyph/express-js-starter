const fs = require('fs')
const QuickEncrypt = require('quick-encrypt')
const privateKey = fs.readFileSync('.private-key', 'utf8')
const password = QuickEncrypt.decrypt('', privateKey)

const config = {
    db: {
        host: '',
        port: '',
        database: '',
        user: '',
        password,
        lowercase_keys: false,
        role: null,
        pageSize: 4096, 
    }
}

module.exports = config