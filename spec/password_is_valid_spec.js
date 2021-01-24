const { passwordIsValid } = require('../src/password_checker.js')

describe('Password is valid', () => {

	let password = "2019Giants!";

	it('Should exist', () => {
		expect(password).toBeTruthy();
	});

	it('Should be longer than than 8 characters', () => {
		let length = password.split(' ').join('').length;
		expect(length).toBeGreaterThan(8);
	});
	
	it('Should have at least one lowercase letter', () => {
		expect(password).toMatch(/[a-z]/);
	});
	
	it('Should have at least one uppercase letter', () => {
		expect(password).toMatch(/[A-Z]/);
	});
	
	it('Should at least have one digit', () => {
		expect(password).toMatch(/[0-9]/);
	});
	
	it('Should have at least one special character', () => {
		expect(password).toMatch(/[!@#$%^&*()_{}+'"]/);
	});
});

