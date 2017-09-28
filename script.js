function validateform() {
	var a = document.form1.name1.value;
	if(a=="") 
	{
		alert("please enter your first name");
		document.form1.name1.focus();
		return false;
	}
	if(!isNaN(a))
	{
		alert("Please Enter Only Characters");
        document.form1.name1.select();
         return false;

	}
	if ((a.length < 5) || (a.length > 15))
    {
        alert("Your Character must be 5 to 15 Character");
        document.form1.name1.select();
        return false;
    }
	var b = document.form1.name2.value;
	if(b=="") 
	{
		alert("please enter your last name");
		document.form1.name2.focus();
		return false;
	}
	if(!isNaN(b))
	{
		alert("Please Enter Only Characters");
        document.form1.name2.select();
         return false;

	}
	if ((b.length < 5) || (b.length > 15))
    {
        alert("Your Character must be 5 to 15 Character");
        document.form1.name2.select();
        return false;
    }
    var c = document.form1.mail.value;
    var atposition = c.indexOf('@');
    var dotposition = c.lastIndexOf('.');
    if(c=="")
    {
    	alert("please enter your mail id");
		document.form1.mail.focus();
		return false;
    }
    // if(atposition<1 || dotposition<atposition+2 || dotposition+2>=c.length)
    // {
    // 	alert("enter valid mail id");
    // 	return false;
    // }
    var d = document.form1.securepassword.value;
    if(d=="")
    {
    	alert("please enter password");
    	document.form1.securepassword.focus();
    	return false;
    }
    if(d.length < 6)
    {
         alert("password must be 6 letters");
         document.form1.securepassword.select();
         return false;
    }
    var e = document.form1.txtaddress1.value;
    if(e=="")
    {
    	alert("please enter the address");
    	document.form1.txtaddress1.focus();
    	return false;
    }
    var f = document.form1.txtaddress2.value;
    if(f=="")
    {
    	alert("please enter the address");
    	document.form1.txtaddress2.focus();
    	return false;
    }
    var g = document.form1.city.value;
    if(g=="")
    {
    	alert("please select the city");
    	document.form1.city.focus();
    	return false;
    }
    var h = document.form1.state.value;
    if(h=="")
    {
    	alert("please select state");
    	document.form1.state.focus();
    	return false;
    }
    var i = document.form1.gender.value;
    if(i=="")
    {
    	alert("please select gender");
    	document.form1.gender.focus();
    	return false;
    }
    var j = document.form1.check.value;
    if(j=="")
    {
    	alert("please select gender");
    	document.form1.check.focus();
    	return false;
    }
}