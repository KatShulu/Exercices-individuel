tab_int=[1,2,3,4,5,6,7,8,9,10]
let sum_int=0
function sum1(tab){
    for (i=0;i<tab.length;i++){
        sum_int+=tab[i]
    }
    return sum_int
}
sum1(tab_int)
console.log(sum_int)
