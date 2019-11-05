let passwordCheck = require('../src/passwordChecker');

describe("Password is valid", function () {
	let password = "p@s$W0rd12";
	let validate = passwordCheck.passwordIsValid(password);

	it("Should exist", function () {
		expect(validate).not.toBeNull();
	});

	it("Should be longer than 8 characters", function(){
		expect(password.length).toBeGreaterThan(8);
	});

	it("should have atleast one lowercase letter", function(){
		expect(password).toMatch(/[a-z]/g);
	});

	it("Should have atleast one uppercase letter", function(){
		expect(password).toMatch(/[A-Z]/g);
	});

	it("Should have atleast one digit", function(){
		expect(password).toMatch(/d/g);
	});

	it("Should have atleast one special character", function(){
		expect(password).toMatch(/[!@#$%^&*()_+?><.,;:"]/g);
	});
});

describe("Password is okay", function(){
	let password = "p@s$W0rd12";
	let validate = passwordCheck.passwordIsOK(password);

	it("Should return true", function(){
		expect(validate).not.toBeNull();
		expect(password.length).toBeGreaterThan(8);
		expect(password).toMatch(/[a-z]/g);
		expect(password).toMatch(/[A-Z]/g);
		expect(password).toMatch(/d/g);
		expect(password).toMatch(/[!@#$%^&*()_+?><.,;:"]/g);
	});

	it("Should return password can not be okay", function(){
		expect(validate).not.toBeNull();
		expect(password.length).toBeGreaterThan(8);
	});

});


