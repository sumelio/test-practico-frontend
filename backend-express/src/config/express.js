const express = require('express')
const cors = require('cors')


module.exports = function ({ swaggerOptions = {}, path, env, limit = {} }) {
  const app = express()
  app.use(cors())
  return app
}
