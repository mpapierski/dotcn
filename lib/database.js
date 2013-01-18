/*
 * Database schema
 */

var mongoose = require('mongoose')
  , db = mongoose.connection
  , Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test')

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('yay')
})

var Meal = new Schema({
  id: { type: Number },
  name: { type: String },  
  price: { type: String },
  random: { type: Schema.Types.Mixed, default: Math.random() }
});

exports.MealModel = mongoose.model('Meal', Meal)

