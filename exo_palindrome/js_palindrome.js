
function isValidDate(string){  
    //Le but est de verifier la validité de la date donnée
    let [day, month, year] = string.split('/')                                      //Methode de split qui attribue a chaque variable un ..   ../../..
    maxDaysInMonth(month,year)                                         //
    if (day>0 && day<=maxDays && month>0 && month<13 && year>999 && year<9999){
        return true
    }else{
        return false
    }
}


function maxDaysInMonth (monthx,yearx){
    maxDays = new Date(yearx, monthx, 0).getDate()
    return maxDays 
}
console.log(isValidDate("30/11/2022"))