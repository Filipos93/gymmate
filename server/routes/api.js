const express = require('express');
const router = express.Router();
const Training = require('./../models/training');

/* GET api listing. */
router.get('/', (req, res) => {
	res.send('api works');
});

router.get('/trainings', (req, res) => {
	// get all the trainings
	Training.find({}, function(err, trainings) {
		if (err) throw err;

		// object of all the trainings
		console.log(trainings);
	});
});

router.post('/trainings', (req, res) => {
	console.log('POST');

	// create a new training
	let newTraining = Training(req.body);

	// save the training
	newTraining.save(function(err) {
		if (err) throw err;
		res.status(200).send(newTraining);
	});
});

module.exports = router;