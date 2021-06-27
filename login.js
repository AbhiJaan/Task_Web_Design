function valid()
{
    var input=document.getElementById("inp").Value
    var reg=/^[A-Za-z]+/g
    var res=reg.test(input)
    if(res==true)
    {
        alert("Username Accepted")
        return true
    }
    else
    {
        alert("Username should not contain only alphabets")
        return false
    }

}