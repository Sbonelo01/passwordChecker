
var lowerCase = /[a-z]/g;
var upperCase = /[A-Z]/g;
var specialCharacters = /[!@#$%^&*()_+?><.,;:"]/g;
var num = /[0-9]/g;

//To check if Password is Valid
function passwordIsValid(password){
	
	try {
		if(password == typeof(null)) throw("Password needs to exist");

		if(password.length < 8) throw("Password needs to be atleast 8 characters long");

		if(password.match(lowerCase) == null) throw("Password needs to have atleast one lowercase letter");

		if(password.match(upperCase) == null) throw("Password needs to have atleast one uppercase letter");

		if(password.match(num) == null) throw("Password needs to have atleast one number");

		if(password.match(specialCharacters) == null) throw("You need to have atleast one special character");
		
		return password;
	} 
	catch(err){
		return err;
	}
}

//To check if Password is Okay
function passwordIsOK(password){
	if(password == typeof(null) && password.length < 8){
		if(password == lowerCase || password == upperCase || password.length >= 8
			|| password != typeof(null) || password == num || password == specialCharacters){
			return true;
		}else {
			return false;
		}
	}	
	return password;
}	 

module.exports = {
	passwordIsValid,
	passwordIsOK
}