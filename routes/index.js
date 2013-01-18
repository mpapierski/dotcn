
/*
 * GET home page.
 */

var MealModel = require('../lib/database.js').MealModel

exports.index = function(req, res){
  MealModel.count(function(err, count) {
    if (err) return res.send(500)
    res.render('index', { total_meals: count })
  })
}