var givenNumber = parseInt (prompt("Donne moi un nombre."))

//function didIWin(givenNumber){
	if (givenNumber>42){
        console.log("plus grand que 42")
    }
    else if(givenNumber<42){
        console.log("plus petit que 42")
    }
    else if(givenNumber == 42) {
        console.log("bg")
    } else {
        console.log("Donne nombre è.é")  
    }  
//}
function didIWin2 (number){
    if (number==42){
        return true
    }
    else {
        return false
    }


}
function gamePlay (givenNumber){
    if (didIWin2(givenNumber)==true){
        alert ("Bien joué nerd")
    }
    else{        
            do { 
                alert ("Nope, rejoue !")
                var givenNumber2 = parseInt (prompt("Donne moi un nombre."))
                didIWin2 (givenNumber2);
            } while (didIWin2 (givenNumber2)==false)
    }
}
gamePlay(givenNumber)
//didIWin(givenNumber)