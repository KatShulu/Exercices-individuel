
function consigne() {
    var givenNumber = parseInt (prompt("Joueur 1 Donne moi un nombre entre 0 & 50."))

    if (givenNumber>0 && givenNumber<50){
        didIWin(givenNumber)
    }else{
        do { 
            alert ("Nope, entre 0 & 50 on a dit !")
            givenNumber = parseInt (prompt("Joueur 1 Donne moi un nombre entre 0 & 50 s'il te plait."))
        } while (givenNumber<0 || givenNumber>50)
        didIWin(givenNumber)
    }
}



function didIWin (givenNumber){
    var guessNumber = parseInt (prompt("Joueur 2 Donne moi un nombre entre 0 & 50."))
   
    if (givenNumber==guessNumber){
        alert ("Bien joué.")
    }
    else{        
        do { 
            alert ("Nope, rejoue !")
            guessNumber = parseInt (prompt("Joueur 2 Donne moi un nombre entre 0 & 50."))
        } while (givenNumber!==guessNumber)
    alert ("Bien joué.")
    }
}

consigne ()