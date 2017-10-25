

function prtArr(arr, s, r){

    if(r){
        // es5
        var newarr=arr.reverse();
        newarr.forEach((elem, index) => console.log(index + s + elem));
        
            // es6
        newarr.forEach((elem, index) => console.log(`${index} ${s} ${elem}`));
        
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
var reverse ="true";

prtArr(sample, symbol, reverse);






