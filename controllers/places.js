const router = require('express').Router()


router.get('/', (req, res) => {
    let places = [{
        name: 'Fortunate Son',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Chinese Resturant',
        pic: '/css/images/forson.jpg',
      }, {
        name: 'Soho House',
        city: 'Los Angeles',
        state: 'CA',
        cuisines: 'Mixture',
        pic: '/css/images/soho.jpg',
      }]
      
    res.render('places/index', {places})
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router
