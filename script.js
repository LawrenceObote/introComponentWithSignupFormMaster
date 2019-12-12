function validate(){
	if(document.form.firstName.value ==""){
		alert("Please provide your first name!.");
		document.form.firstName.focus();
		return false;
	}

	if(document.form.lastName.value == ""){
		alert("Please prove your ast name.");
		document.form.lastName.focus();
		return false;
	}

	if(document.form.email.value ==""){
		alert("Please provide your email address.");
		document.form.email.focus();
		return false;
	}

	if(document.form.password.value ==""){
		alert("Please provide your password.");
		document.form.password.focus();
		return false;
	}
}