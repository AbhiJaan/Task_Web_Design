// Below Function Executes On Form Submit
function validationForm() {
    // Storing Field Values In Variables
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var password=document.getElementById("password").value;
    var confirm=document.getElementById("confirm").value;
    var gender=document.getElementById("gender").value;
    var email=document.getElementById("email").value;
    var pnumber=document.getElementById("pnumber").value;
    var address=document.getElementById("address").value;
    var pcode=document.getElementById("pcode").value;
    // Regular Expression For Email
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    // Conditions
    if (fname && lname != '' && email != '' && pnumber != '')
     {
        if (email.match(emailReg))
        {
        if (document.getElementById("male").checked || document.getElementById("female").checked) 
        {
        if (contact.length == 10)
        {
        alert("All type of validation has done on OnSubmit event.");
        return true;
        } 
        else
        {
        alert("The Contact No. must be at least 10 digit long!");
        return false;
        }
        }
        else
        {
        alert("You must select gender.....!");
        return false;
        }
        } 
        else
        {
        alert("Invalid Email Address...!!!");
        return false;
        }
    } 
    else 
    {
    alert("All fields are required.....!");
    return false;
    }
    }