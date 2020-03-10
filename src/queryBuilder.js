
const EXECUTE = 'EXECUTE'
const SELECT = 'SELECT'

const prepareParam = (parameterCount) => {
    let params = '('
    for(i = 0; i <= (parameterCount - 1); i++) {
        params += '?'
        params += (i !== parameterCount - 1) ? ', ' : ''
    }
    params += ')'
    return params
}

const prepareColumns = (columns) => {
    let cols = ''
    columns.map((item, index) => {
        cols += item
        cols += (index !== (columns.length - 1)) ? ', ' : ''
    })
    return cols
}

const queryBuildProcedure = (queryObject) => {
    let query = ''
    const { procedure } = queryObject
    const { action, name, paramCount } = procedure
    
    if(action === EXECUTE) {
        query += `${EXECUTE} PROCEDURE `
    } else if (action === SELECT) {
        const { columns } = procedure
        query += `${SELECT} ${prepareColumns(columns)} FROM `
    }

    query += `${name}${prepareParam(paramCount)}`
    console.log(query)
    return query
}

module.exports = {
    queryBuildProcedure,
    EXECUTE,
    SELECT
}