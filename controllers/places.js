const router = require('express').Router()

router.get('/', (reqq, res) => {
    res.send('GET /places')
})

module.exports = router
