const express = require('express')
const router = express.Router()

require('./routes/alpha')(router)
require('./routes/beta-private/iteration-1')(router)
require('./routes/beta-private/iteration-2')(router)
require('./routes/beta-private/iteration-3')(router)
require('./routes/beta-private/iteration-4')(router)
require('./routes/beta-private/iteration-5')(router)
require('./routes/beta-private/iteration-6')(router)
require('./routes/beta-private/iteration-7')(router)

module.exports = router
