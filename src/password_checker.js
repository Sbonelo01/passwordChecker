const passwordIsValid = ( password ) => {
	
	let lCase = /^[a-z]/g;
	let uCase = /^[A-Z]/g;
	let digit = /^[0-9]/g;
	let whiteSpace = /\s/g;
	let specialChar = /[!@#$%^&*(),.?":{}|<>]/g;
	
	try {
		if( !password ){
			return 'password should exist' 
		}
		for( let i = 0; i < password.length; i++ ) {
	
			if( password.length < 8 &&
				password[i] != lCase &&
				password[i] != uCase &&
				password[i] != digit &&
				password[i] != specialChar &&
				password[i] != whiteSpace ) {
				return 'not valid' 
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



module.export = {
	passwordIsValid,
	passwordStrength
}
