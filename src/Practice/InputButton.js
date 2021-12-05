/*
import React ,{useState , useEffect} from 'react'

function democomponent () {
const fibonachi = () => {
   let mynum =5  //1, 1, 2, 3, 5, 8 
   var first = 1;
   var second = 1;
    var count;
  var temp;

if(mynum === 1 || mynum === 2)

{alert(`output is : ${1}`)
console.log('1 or 2');}
else{
for (let index = 2; index <mynum+1; index++) {
temp=first //1,1,2
first=second //1,2,3
   second=temp+first //2,3,5
console.log(second);   
}
}
 }
    return (
        <div>
hello
<button onClick={fibonachi}> cick me </button>

        </div>
    )
}

export default democomponent

*/



import React, { Component, useState } from 'react'

function InputButton() {

    const [capture, setcapture] = useState("");

    const onclickHandler = () => {
        //rotor //no lemon
        //const myArray = oldstring.split(' ');

        let string = "top spot"; //mygym //taco cat //red rum
        // split() every letter in string into an item in our array
        // .trim() removes the space before the word
        // replace(/ /g,'') , can replace , here replacing space with nothing 
        let newArray = string.replace(/ /g, '').split('');
        console.log(newArray);
        var len = (newArray.length);
        var index2 = newArray.length;
        for (let index = 0; index < newArray.length; index++) {

            if (newArray[index] !== newArray[--index2]) {

                console.log(newArray[index]);
                console.log(`${index} = ${index2}   `);
                alert(`error occured ${index}:${newArray[index]} = ${index2}:${newArray[index2]}`)
                break;
            }
        }
        console.log("IT IS A success")
    }
    return (
        <div>
            <input type="text" value={capture} onChange={e => setcapture(e.target.value)} />
            <button onClick={onclickHandler}> cick me </button>
        </div>
    )
};

export default InputButton



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


