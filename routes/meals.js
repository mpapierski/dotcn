
/*
 * GET meals listing.
 */
var MealModel = require('../lib/database.js').MealModel;

exports.list = function(req, res){
  MealModel.find(function(err, meals) {
    if (err)
      throw err
    else
      res.send(meals)
  })
};

/*
 * GET meal by id.
 */
exports.get = function(req, res){
  var id = req.param('id')
  MealModel.findOne({ id: id }, function(err, meal) {
    if (err) throw err
    if (!meal) return res.send(404)
    res.send(meal)
  })
}

/*
 * GET random meal.
 */
exports.random = function(req, res){
  MealModel.findOne({ random: { $near: [Math.random(), 0] } }, function(err, meal) {
    if (err) throw err
    var old = meal.random
    meal.random = [Math.random(), 0]
    meal.save(function(err) {
      if (err) {
        res.send(500)
        throw err
      }
      res.send(meal)
    })
  })
}