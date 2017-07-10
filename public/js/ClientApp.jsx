// import $ from 'jquery'
// import _ from 'lodash'
var React = require('react')
var ReactDOM = require('react-dom')

var App = React.createClass({
  render () {
    return (
      <h1>Hello</h1>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('hi'))

// function ready (fn) {
//   if (document.readyState !== 'loading') {
//     fn()
//   } else {
//     document.addEventListener('DOMContentLoaded', fn)
//   }
// }
// var getValues = function () {
//   var name = $('input[name=added-city]').val()
//   var img = $('input[name=optional]').val()
//   $('input[name=added-city]').val('')
//   $('input[name=optional').val('')

//   return {
//     name: name,
//     img: img
//   }
// }

// var cityTemplate = '<div class="city"><div class="city-image "style="background:url(<%= img %>); background-size: cover;">' +
// '</div><div class="city-name">' +
//   '<%= name.toUpperCase() %></div>' +
//   '</div> '

// var cities = []

// var makeTemplate = function (data) {
//   var compiled = _.template(cityTemplate)
//   var cityHtml = compiled(data)
//   $('.city-cards').append(cityHtml)
// }

// var updateCityList = function () {
//   var citydata = cities[cities.length - 1]
//   makeTemplate(citydata)
//   $('.add-city').hide()
// }

// var makeCityList = function (cities, addCity) {
//   if (addCity) {
//     $('.add-city').show()
//   } else {
//     cities.forEach(function (city) {
//       makeTemplate(city)
//     })
//   }
// }

// var getAllCities = function () {
//   window.fetch('/cities')
//     .then(function (resp) {
//       return resp.json()
//     })
//     .then(function (data) {
//       cities = cities.concat(data)
//       if (cities.length === 0) {
//         var addCity = true
//       }
//       makeCityList(cities, addCity)
//     })
// }

// ready(function () {
//   getAllCities()

//   $('.browse button').on('click', function (e) {
//     e.preventDefault()
//     var values = getValues()
//     window.fetch('/cities', {
//       method: 'post',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },

//       body: JSON.stringify(values)
//     })
//     .then(function (resp) {
//       return resp.json()
//     })
//     .then(function (createdLion) {
//       cities.push(createdLion)
//       updateCityList()
//     })
//     return false
//   })
// })

// $('.search input').on('input', function (e) {
//   $('.city').remove()
//   var filteredCities = cities.filter(function (city) {
//     return city.name.toUpperCase().indexOf(e.target.value.toUpperCase()) >= 0
//   })
//   if (filteredCities.length === 0) {
//     makeCityList(filteredCities, true)
//   } else {
//     $('.add-city').hide()
//     makeCityList(filteredCities)
//   }
// })
