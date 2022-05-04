const express = require('express')
const router = express.Router()

require('./routes/alpha')(router)
require('./routes/beta-private/iteration-1')(router)

module.exports = router
