
function isValidDate(string){  
    //Le but est de verifier la validité de la date donnée
    let [day, month, year] = string.split('/')                                      //Methode de split qui attribue a chaque variable un ..   ../../..
    maxDaysInMonth(month,year)                                                      //Envoie vers une autre fonction pour recuperer le nombre jour max du mois entré dans maxDays
    if (day>0 && day<=maxDays && month>0 && month<13 && year>999 && year<9999){     //  Conditions de verif, dont utilisation de maxDays
        return isPalindrome(day, month, year)                                                          //Valide
    }else{
        console.log ("mauvaise date")                                                                 //Non valide
    }
}


function maxDaysInMonth (monthx,yearx){    
    //Sert à recuperer le nombre de jours max dans le mois de l'année des parametres                                     
    maxDays = new Date(yearx, monthx, 0).getDate()                                  //
    return maxDays 
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function isPalindrome(day,month,year){
   // console.log(reverseString(day+month))
    //console.log(year)
    if (reverseString(day+month)==year){
        return true
    }else{
        return false
    }
}
console.log(isValidDate("21/02/2022"))
