const express = require('express');
const Track = require('./models/track');
const bodyParser = require('body-parser');
// const Sequelize = require('sequelize');

const app = express();
app.use(bodyParser.json());

app.get('/tracks/:id', function(request, response) {
	let { id } = request.params;
	Track.findByPk(id).then((track) => {
		if (track) {
			response.json(track);
		}else {
			response.status(404).send();
		}
	}, (validation) => {
		response.status(422).json({
			errors: validation.map((error) => {
				return {
					attribute: error.path,
					message: error.message
				}
			})
		});
	});
});

app.patch('/tracks/:trackId', function(request, response) {
	Track.update({
		name: 'change name',
		milliseconds: 100000,
		unitPrice: 1.99},
		{ where: { id: request.params.trackId} }
	).then((track) => {
		response.json(track);
	});
})

app.listen(8000);