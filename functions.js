// Arrow Function
const calAge1=birthyear=>2037-birthyear
const age3=calAge1(1991)
console.log(age3)
const yearUntillRetirement=(birthyear,firstname)=>
{ 
    const age=2037-birthyear
    const retirement=65-age
    return '${firstname} retires in ${retirement} years'
}
console.log(yearUntillRetirement(1991,'Jonas'))
console.log(yearUntillRetirement(1980,'Bob'))



