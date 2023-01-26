const router = require('express').Router();
const data = require('./data.json')

router.get('/', (req,res) => {
    return res.render('index', {
        data
    })
})


router.get('/home', (req, res) => {
    return res.render('index', {
        data: data
    })
})


router.get('/products', (req, res) => {
    return res.render('products', {
        data
    })
})


router.get('/about-us', (req, res) => {
    return res.render('about')
})

router.get('/contact', (req, res) => {
    return res.render('contact')
})

module.exports = router;