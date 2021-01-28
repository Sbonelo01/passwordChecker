
/*                                                  *
 *      making a logger with the winston module     *
 *                                                  */


const winston = require('winston')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service'  },

    transports: [
    	new winston.transports.Console({ level: 'debug' }),
        new winston.transports.File({ filename: './log/error.log' }),
    ],

    exeptionHandlers: [
    	new winston.transports.File({ filename: './log/error.log' })
    ],
})


const passwordIsValid = ( password ) => {

	let lCase = /^[a-z]/g;
	let uCase = /^[A-Z]/g;
	let digit = /^[0-9]/g;
	let whiteSpace = /\s/g;
	let specialChar = /[!@#$%^&*(),.?":{}|<>]/g;

	try {
		if( !password ){
			logger.error('password should exist')
			throw 'password should exist'
		}
		for( let i = 0; i < password.length; i++ ) {

			if( password.length < 8 &&
				password[i] != lCase &&
				password[i] != uCase &&
				password[i] != digit &&
				password[i] != specialChar &&
				password[i] != whiteSpace ) {
				logger.error('not valid')
				throw 'not valid'
			}
			else {
				return 'password is valid'
			}
			break;
		}
	}
	catch(e){
		return e
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
			logger.debug('User password is ok')
			return true;
		}
	}
	logger.debug('User password is not ok')
	return false;
}

module.export = {
	passwordIsValid,
	passwordStrength,
	passwordIsOk
}
