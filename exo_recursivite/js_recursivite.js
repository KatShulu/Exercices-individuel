tab_int=[1,2,3,4,5,6,7,8,9,10]


function sum1(tab){
    let sum_int=0
    for (i=0;i<tab.length;i++){
        sum_int+=tab[i]
    }
    return sum_int
}
console.log(sum1(tab_int))

function sum2(tab){
    if (tab.length==0){
        return 0
    }else{
        return tab[0]+sum2(tab.slice(1))
    }
}
console.log(sum2(tab_int))

function factoriel(int){
    if (int==0){
        return 1
    }else{        
        return int*factoriel(int-1)
    }
}
console.log(factoriel(3))

var fibonacci_series = function (n) {
  if (n===1) {
    return [0, 1]
  } else {
    var s = fibonacci_series(n - 1)
    s.push(s[s.length - 1] + s[s.length - 2])
    return s;
  }
}
 console.log(fibonacci_series(21));