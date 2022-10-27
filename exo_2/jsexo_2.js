var givenNumber = parseInt (prompt("Donne moi un nombre."))

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
            var givenNumber2 = parseInt (prompt("Donne moi un nombre."))
            didIWin (givenNumber2)
        } while (didIWin (givenNumber2)==false)
    alert ("Bien joué nerd")

    }
}
gamePlay(givenNumber)