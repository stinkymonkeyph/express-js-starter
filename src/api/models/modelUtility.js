const createModel = () => {
  return {
      procedure: {
          action: '',
          name: '',
          identifier: '',
          columns: [],
          paramCount: 0,
          parameters: [],
          matches: '',
      },
      table: {
          action: '',
          name: '',
          identifier: '',
          columns: [],
          matches: '',
      }
  }
}

module.exports = { createModel }