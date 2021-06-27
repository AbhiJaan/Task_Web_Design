function watch()
{
    var date=new Date()
    var hours=date.getHours()
    var min=date.getMinutes()
    var sec=date.getSeconds()
    var time=(`${hours}:${min}:${sec}`)
    document.write(time)
    document.getElementById("i").innerHTML=time
}
setInterval(watch,100)
