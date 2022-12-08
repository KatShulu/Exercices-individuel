let lastPlayer
var alumNow = 50

function howMany(){
    var arrayNumPlayers=[]
    if (arrayNumPlayers.length==0){
    var numPlayers = prompt("Combien de joueurs",3)
    for (let i=1 ; i<=numPlayers ; i++){
        arrayNumPlayers.push(i)
        console.log(arrayNumPlayers)
    }}
    return arrayNumPlayers
}

function subAlumette (subAlum, player){
    
    lastPlayer = player
    alumNow -= subAlum
    console.log(alumNow)
}

function win (alumNow){
    if (alumNow <= 0 ) {
        return true
    }else{
        return false
    }
}


function askPlayer(array){
    for (i=1; i<array.length+1;i++){
        var givenNumber = parseInt (prompt(`joueur ${[i]} Donne moi un nombre d'alumettes entre 1 & 6 s'il te plait.`))
        if (givenNumber>0 && givenNumber<7 ){
            subAlumette(givenNumber, [i])
            if (win(alumNow)){
                alert (`gg ${[i]}`)
                i=array.length
                return true
            }
            
        }else{
            do { 
                alert ("Nope, entre 1 & 6 on a dit !")
                givenNumber = parseInt (prompt(`Joueur ${[i]}  Donne moi un nombre d'alumettes entre 1 & 6 s'il te plait.`))
            } while (givenNumber<0 || givenNumber>7)
    
            subAlumette(givenNumber, [i])
            if (win(alumNow)){
                alert (`gg ${[i]}`)
                i=array.length
                return true
            }

        }
    }



}
function newTurn(){
    arrayNumPlayers=howMany()
    do {askPlayer(arrayNumPlayers)}
    while (askPlayer(arrayNumPlayers)!==true)
}


newTurn()