// refer to question 4 before development starts for scope document

const form = document.querySelector("form");

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const phoneError = document.querySelector("#phoneError");

const email = document.querySelector("#email");
const messageEmail = document.querySelector("#emailError");

const phone = document.querySelector("#phone");
const messagePhone = document.querySelector("#phoneError");

form.addEventListener("submit", checkName);


function checkName() {
	/*First name
	------------*/
	event.preventDefault();
	
	const nameValue = firstName.value;
	
	if (validateLength (nameValue) === true) {
		firstNameError.style.display = "none";
	}else{
		firstNameError.style.display = "block";
	}
	
	/*last name
	-----------------*/
	const lastNameValue = lastName.value;
	
	if (validateLength(lastNameValue) === true){
		lastNameError.style.display = "none";
	}else{
		lastNameError.style.display = "block";
	}
	
	/*Email
	---------------*/
	const emailValue = email.value;
	
	if(validateEmail(emailValue)){
		messageEmail.style.display = "none";
	}else{
		messageEmail.style.display = "block";
	}
	/*phone number
	---------------*/
	
	const phoneValue = phone.value;
	
	if(validatePhone(phoneValue)) {
		messagePhone.style.display = "none";
	}else{
		messagePhone.style.display = "block";
	}
}


function validateLength(value, lengthToCheck) {
	const trimmedValue = value.trim();
	
	if (trimmedValue.length >= 2){
		return true;
	}else {
		return false;
	}
	
}
/*Email
---------*/
function validateEmail(email) {
	
const regEx = /\S+@\S+\.\S+/;
	
	if(regEx.test(email)) {
		return true;
	}else{
		return false;
	}
}

/* phone
--------------*/
function validatePhone(phone) {
	const phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	
	if(phoneNumber.test(phone)){
		return true;
	}else{
		return false;
	}
}