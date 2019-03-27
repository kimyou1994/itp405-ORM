const sequelize = require('./../database/sequelize.js');
const Sequelize = require('sequelize');

module.exports = sequelize.define('track', {
	id: {
		field: 'TrackId',
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		field: 'Name',
		type: Sequelize.STRING,
		validate: {
			notEmpty: {
				args: true,
				msg: 'Name is required'
			}
		}
	},
	milliseconds: {
		field: 'Milliseconds',
		type: Sequelize.NUMBER,
		validate: {
			isNumeric: {
				args: true,
				msg: 'Milliseconds need to be numeric'
			}
		}
	},
	unitPrice: {
		field: 'UnitPrice',
		type: Sequelize.NUMBER,
		validate: {
			isNumeric: {
				args: true,
				msg: 'Unity Price need to be numeric'
			}
		}
	}
}, {
	timestamps: false
});