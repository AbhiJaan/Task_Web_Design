function valid()
{
    var input=document.getElementById("inp")
    var reg=/^[A-Za-z]/g
    var res=reg.test(input.Value)
    if(res==false)
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