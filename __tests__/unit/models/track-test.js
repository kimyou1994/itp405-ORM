const { expect } = require('chai');
const Track = require('./../../../models/track.js');


describe('milliseconds', () => {
	it('Test 1: Milliseconds is not numeric', async () => {
		try {
			let track = new Track({ name: 'a', milliseconds: 'not number', unitPrice: 1.99});
			await track.validate();
		} catch(error) {
			expect(error.errors[0].message).to.equal('Milliseconds need to be numeric');
		}
	});
});

describe('priceUnit', () => {
	it('Test 2: priceUnit is not numeric', async () => {
		try {
			let track = new Track({ name: 'a', milliseconds: 111111, unitPrice: 'not number'});
			await track.validate();
		} catch(error) {
			expect(error.errors[0].message).to.equal('Unity Price need to be numeric');
		}
	});
});
