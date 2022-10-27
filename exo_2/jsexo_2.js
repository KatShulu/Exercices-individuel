var givenNumber = parseInt (prompt("Donne moi un nombre entre 0 & 50."))

function consigne(nombre_prompt) {
    if (nombre_prompt>0 && nombre_prompt<50){
        didIWin(givenNumber)
    }else{
        do { 
            alert ("Nope, entre 0 & 50 on a dit !")
            var givenNumber2 = parseInt (prompt("Donne moi un nombre entre 0 & 50."))
            consigne (givenNumber2)
        } while (nombre_prompt>0 && nombre_prompt<50)
    }
}
consigne (givenNumber)
function didIWin (number){
    if (number==42){
        return true
    }
    else {
        return false
    }
}

function gamePlay (givenNumber){
    if (didIWin(givenNumber)==true){
        alert ("Bien joué nerd")
    }
    else{        
        do { 
            alert ("Nope, rejoue !")
            var givenNumber3 = parseInt (prompt("Donne moi un nombre entre 0 & 50."))
            didIWin (givenNumber3)
        } while (didIWin (givenNumber3)==false)
    alert ("Bien joué nerd")

    }
}
gamePlay(givenNumber)