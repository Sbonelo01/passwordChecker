const passwordIsValid = ( password ) => {

	let lCase = /^[a-z]/g;
	let uCase = /^[A-Z]/g;
	let digit = /^[0-9]/g;
	let whiteSpace = /\s/g;
	let specialChar = /[!@#$%^&*(),.?":{}|<>]/g;

	try {
		if( !password ){
			throw 'password should exist'
		}
		for( let i = 0; i < password.length; i++ ) {

			if( password.length < 8 &&
				password[i] != lCase &&
				password[i] != uCase &&
				password[i] != digit &&
				password[i] != specialChar &&
				password[i] != whiteSpace ) {
				throw 'not valid'
			}
			else {
				return 'password is valid'
			}
			break;
		}
	}
	catch(e){
		console.log(e)
	}
}

/*                                                          *
 * 		requirements as per ACN syllabus: passwordStrength  *
 *                                                          */

const passwordStrength = ( password ) => {

	let lCase = /^[a-z]/g;
        let uCase = /^[A-Z]/g;
        let digit = /^[0-9]/g;
        let whiteSpace = /\s/g;
	let specialChar = /[!@#$%^&*(),.?":{}|<>]/g;
	let numberOfConditionsMet = ['*','*','*','*','*','*'];

	if( !password && password.length < 8 ) {
		return 'invalid'
	}
	if( password.match(lCase) ) {
		numberOfConditionsMet.pop()
	}
	if( password.match(uCase) ) {
		numberOfConditionsMet.pop()
	}
	if( password.match(digit) ) {
		numberOfConditionsMet.pop()
	}
	if( password.match(whiteSpace)){
		numberOfConditionsMet.pop()
	}
	if( password.match(specialChar) ){
		numberOfConditionsMet.pop()
	}
	if( numberOfConditionsMet.length >= 6 ){
		return 'Strong'
	}
	if( numberOfConditionsMet.length >= 4 ) {
		return 'Medium'
	}
	if( numberOfConditionsMet.length >= 3 ){
		return 'Weak'
	}
}

/*                                                          *
 * 		requirements as per Umuzi syllabus: passwordIsOk    *
 *                                                          */

const passwordIsOk = ( password ) => {

	if ( password != '' && password.length > 8 ) {
		if ( password.match(/[a-z]/g) !== null || password.match(/[A-Z]/g) !== null ||
			password.match(/[0-9]/g) !== null || password.match(/[!@#$%^&*()_{}+'"]/g) !== null ) {
			return true;
		}
	}
	return false;

}

/*                                                  *
 *      making a logger with the winston module     *
 *                                                  */

const winston = require('winston')

const logger = winston.createLogger({

    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service'  },

    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'debug' }),
    ]
})

// logging for the passwordIsOk function

const isOk = logger.debug('User password not ok')
const notOk = logger.debug('User password is not ok')

if( passwordIsOk == true ){
    logger.add(new winston.transports.Console({
        format: winston.format.simple(isOk),
    }))
}
if( passwordIsOk != true ){
    logger.add(new winston.transports.Console({
        format: winston.format.simple(notOk),
    }))
}

//logger.debug('User password is ok')

module.export = {
	passwordIsValid,
	passwordStrength,
	passwordIsOk
}
