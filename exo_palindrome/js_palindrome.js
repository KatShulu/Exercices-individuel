
function isValidDate(string){  
    //Le but est de verifier la validité de la date donnée
    let [day, month, year] = string.split('/')                                      //Methode de split qui attribue a chaque variable un ..   ../../..
    maxDaysInMonth(month,year)                                                      //Envoie vers une autre fonction pour recuperer le nombre jour max du mois entré dans maxDays
    if (day>0 && day<=maxDays && month>0 && month<13 && year>999 && year<9999){     //  Conditions de verif, dont utilisation de maxDays
        if (isDatePalindrome(day, month, year)){                                    //Verifie si c'est un palindrome
            return "Cette date est un palindrome"                                   //true/true
        }else{
            return "Cette date n'est pas un palindrome"                             //true/false
        }
    }else{
        return "Cette date n'est pas une date valide"                               //false/false
    }
}


function maxDaysInMonth (monthx,yearx){    
    //Sert à recuperer le nombre de jours max dans le mois de l'année des parametres                                     
    maxDays = new Date(yearx, monthx, 0).getDate()                                  
    return maxDays 
}

function reverseString(str) {
    // retourne l'ordre des lettres d'une string
    return str.split("").reverse().join("");                                       // suite de méthode, découpe et array, inverse les indexs, remet en une seule string
}

function isDatePalindrome(day,month,year){
    //verifie si ddmm = yyyy
    if (reverseString(day+month)==year){                                           // Verifie si ddmm = yyyy
        return true
    }else{
        return false
    }
}

function getNextPalindromes (x){
    // Sert à generer les prochaines dates et push dans un tableau les palindromes
    let nextPalindromes=[]                                                         //Créer un tableau qui receuillera les palindromes
    var tomorow = new Date()                                                       //Créer une date
    
    for (i=0; nextPalindromes.length<x ; i++){                                     //Démare la boucle qui s'arretera quand le tableau à atteint x
        tomorow.setDate(tomorow.getDate()+1)                                       //A chaque tour la date augmente de 1

        stringfy=JSON.stringify(tomorow)                                           //stringfy la date
        date=stringfy.substr(1,10)                                                 //suprime les heures minutes secondes
        let [year, month, day] = date.split('-')                                   //split en tableau en se basant sur les -

        if(isDatePalindrome(day,month,year)==true){                                //verifie le fait que sa soit un palindrome
            nextPalindromes.push(day+"/"+month+"/"+year)                           //si c'est vrai, push en format dd/mm/yyyy
        }
    }
    return nextPalindromes                                                         //Rends les palindromes
}

function isPalindrome(string){                  
    //Sert à verifier si c'est un palindrome pour les non dates
    string= string.toLowerCase()                                                   //Au cas ou pour les majuscules
    cut=(string.length/2)+1                                                        //Coupe en deux +1 pour avoir le milieu (kay pour kayak)
    cutStr1=string.substr(0,cut)                                                   //créer une première partie
    cutStr2=string.substr(cut-1,string.length)                                     //créer une deuxieme partie
    cutStr1=reverseString(cutStr1)                                                 //reverse la premiere partie 
    if (cutStr1==cutStr2){      
        return("Cette chaine de caratere est un palindrome")
    }else{
        return("Cette chaine de caratere n'est pas un palindrome")
    }
}


function isDate(string){                
    //Verifie si c'est une date ou un mot
    if (string.search("/")==-1){                                                   //se sert de "/" pour reperer la date
        return isPalindrome(string)                                                //C'est un mot, je verifie direct si c'est un palindrome
         
    }else{
        return isValidDate(string)                                                 //Si c'est une date je verifie si c'est une bonne date
    }
}


console.log(getNextPalindromes(8))                                                 //Generation tableau palindrome
console.log(isDate("31/02/2022"))                                                  //date mauvaise
console.log(isDate("01/01/2054"))                                                  //bonne date pas palin 
console.log(isDate("22/02/2022"))                                                  //palindrome
console.log(isDate("Kayak"))                                                       //palindrome avec option maj
console.log(isDate("essai"))                                                       //pas palin