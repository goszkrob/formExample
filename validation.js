function validateForm()
{
	var errorstring =''
	
	var email = document.forms["returnForm"]["Email"].value;
	var password = document.forms["returnForm"]["password"].value;
	var firstName = document.forms["returnForm"]["firstName"].value;
	var middleInitial = document.forms["returnForm"]["middleInitial"].value;
	var lastName = document.forms["returnForm"]["lastName"].value;
	var address1 = document.forms["returnForm"]["address1"].value;
	var address2 = document.forms["returnForm"]["address2"].value;
	var city = document.forms["returnForm"]["city"].value;
	var state = document.forms["returnForm"]["state"].value;
	var zipCode = document.forms["returnForm"]["zipCode"].value;
	var productType = document.forms["returnForm"]["productType"].value;
	var returnReason = document.forms["returnForm"]["returnReason"].value;
	var reasonComment = document.forms["returnForm"]["reasonComment"].value;
	var iAgree = document.forms["returnForm"]["Iagree"].value;

	
	if(!/^[a-zA-Z0-9.'!\-_]{3,}\@{1}[a-zA-Z0-9]{2,}\.[a-zA-Z]{3,62}$/.test(email))
	/*
	explination of regex:
	
	username is alphanumeric or contains[.'!-or_] and at least 3 characters
	then contains only 1 @ symbol
	then has at least 2 alphanumeric characters
	then a .
	then from 3-62 alphabet characters
	
	--  regex learned and lightly tested at www.regex101.com*/
	{
		errorstring+="Email is not valid\n";
	}
	
	if(password.length <= 7)
	{
		errorstring+="Password must be at least 8 characters long.\n";
	}
		
	if(firstName.length <= 1)
	{
		errorstring+="First Name must be at least 2 characters long.\n";
	}
	
	if(middleInitial.length > 1)
	{
		errorstring+="Middle Intial must be only 1 character.\n";
	}
	
	if(lastName.length <= 1)
	{
		errorstring+="Last Name must be at least 2 characters long.\n";
	}
	
	if(!/^[0-9]{5}$/.test(zipCode))
	{
		errorstring+="Please enter a 5 number zip-code.\n";
	}
	
	if(productType == '')
	{
		errorstring+="Please select a type of product.\n";
	}
	
	if(state == 'default')
	{
		errorstring+="Please select a state.\n";
	}
	
	if(returnReason == 'default')
	{
		errorstring+="Please select a reason for return.\n";
	}
	
	var captchaResponse = grecaptcha.getResponse();
	if(captchaResponse.length == 0)
	{
		errorstring+="Captcha Not Verified!\n";
	}
	
	
	if(errorstring ==''){
		alert("FORM COMPLETE!!"+
		"\nE-mail: "+email+
		"\nPassword: "+password+
		"\nFirst Name: "+firstName+
		"\nMiddle Initial: "+middleInitial+
		"\nLast Name: "+lastName+
		"\nAddress Line 1: "+address1+
		"\nAddress Line 2: "+address2+
		"\nCity: "+city+
		"\nState: "+state+
		"\nZip Code: "+zipCode+
		"\nProduct Type: "+productType+
		"\nReturn Reason: "+returnReason+
		"\nReason Comment: "+reasonComment+
		"\nAgree: "+iAgree+
		"\nRecaptcha:  Verified"
		);		
		
		return false;}
	else{alert(errorstring); return false;}
}
