
function isValidDate(string){  
    //Le but est de verifier la validité de la date donnée
    let [day, month, year] = string.split('/')                                      //Methode de split qui attribue a chaque variable un ..   ../../..
    maxDaysInMonth(month,year)                                                      //Envoie vers une autre fonction pour recuperer le nombre jour max du mois entré dans maxDays
    if (day>0 && day<=maxDays && month>0 && month<13 && year>999 && year<9999){     //  Conditions de verif, dont utilisation de maxDays
        return isPalindrome(day, month, year)                                       //Valide
    }else{
        console.log ("mauvaise date")                                               //Non valide
    }
}


function maxDaysInMonth (monthx,yearx){    
    //Sert à recuperer le nombre de jours max dans le mois de l'année des parametres                                     
    maxDays = new Date(yearx, monthx, 0).getDate()                                  //
    return maxDays 
}

function reverseString(str) {
    // retourne l'ordre des lettres d'une string
    return str.split("").reverse().join("");                                       // suite de méthode, découpe et array, inverse les indexs, remet en une seule string
}

function isPalindrome(day,month,year){
    //verifie si ddmm = yyyy
    if (reverseString(day+month)==year){
        return true
    }else{
        return false
    }
}

//function getNextPalindromes (x)
console.log(isValidDate("21/02/2022"))
