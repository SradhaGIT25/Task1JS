// 8.   Given an array of words:
// ["care", "race", "acre", "dog", "god", "cat"]
// Group words that are anagrams together.
//  Output:
// [
//   ["care", "race", "acre"],
//   ["dog", "god"],
//   ["cat"]
// ]

// SOLUTIONS
let array1=[];
let array2=[];
let count1=0;
let count2=0;
let words=["care", "race", "acre", "dog", "god", "cat"];
for(let i=0;i<words.length-1;i++){
        // console.log(words[i]);
        let string1=words[i];
        let string2=words[i+1];
        console.log(string2);

let letters1=[...string1];
let letters2=[...string2];

let frequency1={};
let frequency2={};
let count1=0;
let count2=0;
if(letters1.length===letters2.length){
for(let i=0;i<string1.length;i++){
    if(string1.indexOf(string1[i])<i){
    continue;
    }
    let count1=0;
    for(let j=0;j<letters1.length;j++){
        if(string1[i]==(letters1[j])){
        count1++;
}
    }
frequency1[string1[i]]=count1;
}
console.log(frequency1);


for(let i=0;i<string2.length;i++){
    if(string2.indexOf(string2[i])<i){
        continue;
    }
    let count2=0;
    for(let j=0;j<letters2.length;j++){
        if(string2[i]===(letters2[j])){
        count2++;
}
    }
frequency2[string2[i]]=count2;
}
console.log(frequency2);

let anagramCheck=true;
for(let letter in frequency1){
    if(frequency1[letter]!==frequency2[letter]){
        anagramCheck=false;
        break;
    }
}
if(anagramCheck){
        array1.push([words[i],words[i+1]]);
  
    console.log("anagram");                                                                         
}
else{
        array2.push(words[i+1]);
    console.log("not anagram");
}
}else{
    console.log("anagram");
}
}
console.log(array1);
array3=array1[0]+array1[1];
console.log(array3);
console.log(array2);