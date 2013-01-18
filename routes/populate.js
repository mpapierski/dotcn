var MealModel = require('lib/database.js').MealModel;

var meals = [
	(new MealModel({
		name: 'Kurczak "Złote Monety"',
		price: '12.00'
	})),
	(new MealModel({
		name: 'Kurczak "Gonbao"',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Kurczak na chrupko CimCiaCho',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Kurczak "Viet Nam"',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Kurczak z grilla na ostro',
		price: '11.70'
	})),
	(new MealModel({
		name: 'Udko kurczaka po hanoisku',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Kurczak słodko-kwaśny',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Kurczak po chińsku',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Kurczak po tajlandzku',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Kurczak z ananasami',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Kurczak pieczony na ostro',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Kurczak pieczony w sezamie (bez warzyw)',
		price: '11.70'
	})),
	(new MealModel({
		name: 'Kurczak orientalny z warzywami świeżymi',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Kurczak po indyjsku',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Kurczak w pięciu smakach',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Kurczak w sosie pikantnym',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Kurczak w sosie curry',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Udko kurczaka na chrupko CimCiaCho (bez kości)',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Udko kurczaka po chińsku (bez kości)',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Kurczak w sosie grzybowym',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Udko kurczaka z grzybami (bez kości)',
		price: '11.50'
	})),
	(new MealModel({
		name: 'Pieczone udko w sosie grillowym',
		price: '11.50'
	}))
]

for (var i = 0; i < meals.length; i++)
{
	meals.set('id', 1 + i)
	meals.save(function(err) {
		if (err) throw err
	})
}
