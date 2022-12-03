const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays)
console.log(hours)
function countHours(year, holidays) {
    hours = 0
    for (holid of holidays) {
        dday = new Date(year+"/"+holid).getDay()
        if (dday > 0 && dday < 6) hours +=2
    }
    return hours
}
