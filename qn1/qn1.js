// 1. Without using built-in methods like .map(), .filter(), or .reduce(), implement your own versions:
// myMap(array, callback)
// myFilter(array, callback)
// myReduce(array, callback, initialValue)

// SOLUTION:

// map()
let res=[];
let numbers1=[1,2,3,4];
let number=myMap(numbers1,square);
function myMap(array1,fun){
    for(let i=0;i<=array1.length-1;i++){
    let result=fun(array1[i]);
    res.push(result);
    }
    console.log(res);
}
function square(element){
    return Math.pow(element,2);
}

// filter()
let filArray=[];
let numbers2=[1,2,3,4];
let evenNum=myFilter(numbers2,isEven);
console.log(evenNum)
function myFilter(array1,fun){
for(let i=0;i<=array1.length-1;i++){

    if(fun(array1[i])){
    filArray.push(array1[i]);
    }        
}
console.log(filArray);
}
function isEven(element){
        return element%2==0         
}

// reduce()
let iniValue=0;
let numbers3=[1,2,3,4];
let total=myReduce(numbers3,sumOf,0);
console.log(total)
function myReduce(array1,fun,iniValue){
    let value=iniValue;
for(let i=0;i<=array1.length-1;i++){
    value=fun(value,array1[i]);
        }
        console.log(value);    
}
function sumOf(accumulator,element){
        return accumulator+element;
}