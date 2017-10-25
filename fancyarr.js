

function prtArr(arr, s, r){

    if(r==1){
        // es5
        var newarr=arr.reverse();
        newarr.forEach((elem, index) => console.log(arr.length-index-1 + s + elem));
        
            // es6
        newarr.forEach((elem, index) => console.log(`${arr.length-index-1} ${s} ${elem}`));
        
    }
 
    else{
        // es5
        arr.forEach((elem, index) => console.log(index + s + elem));
        
            // es6
        arr.forEach((elem, index) => console.log(`${index} ${s} ${elem}`));
        
    }
}

var sample = ["James", "Jill", "Jane", "Jack"];
var symbol = "->";
var reverse ="false";

prtArr(sample, symbol, reverse);






