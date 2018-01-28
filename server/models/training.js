// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const trainingSchema = new Schema({
	name: String,
	date: Date,
	excercises: [
		{
			name: String,
			series: [{
				id: Number,
				weight: Number,
				reps: Number,
			}],
		}
	]
});

// the schema is useless so far
// we need to create a model using it
const Training = mongoose.model('Training', trainingSchema);

// make this available to our users in our Node applications
module.exports = Training;