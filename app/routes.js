const express = require('express')
const router = express.Router()

require('./routes/beta-private/sandbox')(router)
require('./routes/alpha')(router)
require('./routes/beta-private/iteration-1')(router)
require('./routes/beta-private/iteration-2')(router)
require('./routes/beta-private/iteration-3')(router)
require('./routes/beta-private/iteration-4')(router)
require('./routes/beta-private/iteration-5')(router)
require('./routes/beta-private/iteration-6')(router)
require('./routes/beta-private/iteration-7')(router)
require('./routes/beta-private/iteration-8')(router)
require('./routes/beta-private/iteration-9')(router)
require('./routes/beta-private/iteration-10')(router)
require('./routes/beta-private/iteration-11')(router)
require('./routes/beta-private/iteration-12')(router)
require('./routes/beta-private/iteration-13')(router)
require('./routes/beta-private/iteration-14')(router)
require('./routes/beta-private/iteration-15')(router)

// releases
require('./routes/releases/1-0-3')(router)

module.exports = router
