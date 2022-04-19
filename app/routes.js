const express = require('express')
const router = express.Router()

require('./routes/alpha')(router)
require('./routes/beta-private')(router)

module.exports = router
