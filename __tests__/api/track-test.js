const frisby = require('frisby');
const { Joi } = frisby;
//const Joi = frisby.Joi;

it('Test1: Track does not exist', () => {
	return frisby
		.get('http://localhost:8000/tracks/-1')
		.expect('status', 404);
});

it('Test2: Updating a Track Successfully', () => {
	return frisby
		.patch('http://localhost:8000/tracks/1')
		.get('http://localhost:8000/tracks/1')
		.expect('status', 200)
		.expect('json', 'name', 'change name')
		.expect('json', 'milliseconds', 100000)
		.expect('json', 'unitPrice', 1.99);
});

it('Test3: Validation Errors', () => {
	return frisby
		.patch('http://localhost:8000/tracks/1',{
			name: "",
			milliseconds: "a",
			unitPrice: "b"
		})
		.expect('status', 422);
});