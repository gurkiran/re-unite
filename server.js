var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var _ = require('lodash')

// var cities = [
//     {name:'batala', img:'https://moneykundal.files.wordpress.com/2012/09/shamsher-khan-tomb.jpg'},
//     {name:'amritsar', img:'http://www.happytrips.com/photo/msid-49831491,width-96,height-65.cms'},
//     {name:'gurdaspur', img:'http://www.onefivenine.com/images/districtimages/Punjab/Gurdaspur/5.jpg'},
//     {name:'jalandhar', img:'http://punjab.mallsmarket.com/sites/default/files/photos/malls/MBDNeopolisMall_Jalandhar_1.jpg'},
//     {name:'ludhiana', img:'http://wallpapercave.com/wp/jO8BQur.jpg'},
//     {name:'patiala', img:'http://wallpapercave.com/wp/jO8BQur.jpg'}
// ];

var cities = []
var id = 0

var updateId = function (req, res, next) {
  if (!req.body.id) {
    id++
    req.body.id = id + ''
  }
  next()
}

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/cities', function (req, res) {
  res.json(cities)
})

app.post('/cities', updateId, function (req, res) {
  var city = req.body
  cities.push(city)
  res.json(city)
})

app.listen(8001, function () {
  console.log('Server started !')
})
