const { passwordIsOk } = require('../src/password_checker.js')

describe('Password is ok', () => {

        let password = '2019Giants!';

        it('Should exist', () => {
                expect(password).toBeTruthy();
        });

        it('Should be longer than than 8 characters', () => {
                expect(password.split(' ').join('').length).toBeGreaterThan(8);
        });

        it('Should at least have one digit', () => {
                expect(password).toMatch(/[0-9]/);
        });
});
