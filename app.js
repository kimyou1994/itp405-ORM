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

app.patch('/tracks/:id', function(request, response) {
	let { id } = request.params;
	Track.findByPk(id).then((track)=>{
	if (track){
	}else{
		return Promise.reject();
	}
	}).then(()=>{
	Track.update({
		name: request.body.name,
		milliseconds: request.body.milliseconds,
		unitPrice: request.body.unitPrice},
	 	{ where:{ id : request.params.id }
	}).then(()=>{
		response.status(200).send();
	},(validation)=>{
		response.status(422).json({
				errors: validation.errors.map((error)=>{
		    		return {
		    			attribute: error.path,
		    			message: error.message
		    		}
		  		})
		    })
		});
	},()=>{
		response.status(404).send();
	});
 
})

app.listen(8000);