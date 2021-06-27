
function valid() {
var fname = 
    document.forms["RegForm"]["fname"];
var lname = 
    document.forms["RegForm"]["lname"];
var password = 
    document.forms["RegForm"]["password"];
var cpass = 
    document.forms["RegForm"]["cpass"];
var gender = 
    document.forms["RegForm"]["gender"];
var email = 
    document.forms["RegForm"]["email"];
var pnumber = 
    document.forms["RegForm"]["pnumber"];
var address = 
    document.forms["RegForm"]["address"];


if (fname.value == "") {
    window.alert("Please enter your First name.");
    fname.focus();
    return false;
}

if (lname.value == "") {
    window.alert("Please enter your Last name.");
    lname.focus();
    return false;
}

if (address.value == "") {
    window.alert("Please enter your address.");
    address.focus();
    return false;
}

if (email.value == "")
 {
    window.alert(
        "Please enter a valid e-mail address.");
    email.focus();
    return false;
    if (email.value != "")
    {
    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
      return false;  
      }  
    }
}

if (pnumber.value == "")
 {
    window.alert("Please enter your telephone number.");
    pnumber.focus();
    return false;
    
}

if (password.value == "")
    {
    window.alert("Please enter your password");
    password.focus();
    return false;
    }
if (cpass.value == "") {
    window.alert("Please enter your password");
    cpass.focus();
    return false;
}

if (gender.selectedIndex < 1) {
    alert("Please enter your course.");
    gender.focus();
    return false;
}

return true;
}
