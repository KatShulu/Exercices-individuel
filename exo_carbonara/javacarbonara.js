const ingredientarray = ["Pates", "Oeufs", "Sel", "Poivre", "Lardon", "Oignon", "Parmesan"]

function nb_ingredient(){
    document.getElementById("nb_ingredient").textContent=ingredientarray.length;
}
function sort (){
    var ingretrie =ingredientarray.sort()
}


function affichage_liste () {
    var input = 1
    for (i=0; i<ingredientarray.length; i++){
        document.getElementById(input).textContent=ingredientarray [i];
        input+=1
    }
}

function rien_a_voir() {
    const array=[21,22,23,24,25,26,27,28,29]
    let info = array.slice(1,8)
    console.log (array[2])
    window.alert(info)
}

rien_a_voir ()
sort ()
nb_ingredient()
affichage_liste ()