const express = require('express')
const router = express.Router()

require('./routes/alpha')(router)
require('./routes/beta-private/iteration-1')(router)
require('./routes/beta-private/iteration-2')(router)
require('./routes/beta-private/iteration-3')(router)

module.exports = router
