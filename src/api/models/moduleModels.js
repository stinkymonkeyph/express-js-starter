const { createModel }= require('./modelUtility')
const { EXECUTE, SELECT } = require('../../queryBuilder.js')

// sample usage

const modulesList = createModel()
modulesList.procedure.action = SELECT
modulesList.procedure.name = 'SELECT_MODULEUSER_SEARCH2'
modulesList.procedure.columns = ['FULLNAME', 'USER_NAME', 'MODULEUSED', 'LASTLOGGEDIN', 'COMPUTERNAME']
modulesList.procedure.paramCount = 1
modulesList.procedure.identifier = 'modulesList'

const modulesUpdate = createModel()
modulesUpdate.procedure.action = EXECUTE
modulesUpdate.procedure.name = 'UPDATE_SYSTEMLOG2'
modulesUpdate.procedure.paramCount = 2
modulesUpdate.procedure.identifier = 'modulesUpdate'

module.exports = { modulesList, modulesUpdate }