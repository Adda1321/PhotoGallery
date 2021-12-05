//write a function to sum/product/circumference/area/max n numbers 
import React, { useState } from 'react'


function PFPractice() {
    let [state, setstate] = useState(0)
    let arr = [1, 2, 3];


    const ran = (...prob) => { 
        let sum = 0;
        for (const index of prob) { // OUTPUT 1,3,5
            // for (let index = 0; index < prob.length; index++) {   
            //   sum += prob[index];
            sum += index;
            console.log(sum) //1 , 3 , 5
        }

        console.log("inner REST");
    }
    const ran2 = (a, b, c) => {

        let sum = 0
        sum = a + b + c;
        console.log(sum) // 6

        console.log("inner spread");
    }
    console.log("outer");

    const factorial = (num) => {
       
        var count = 1;
        for (var index = 1; index <= num; index++) {
            // setstate(state * index);
            count *= index;
        }
        console.log("factorial = " + count)
    }
    // function factorialize() {
    //     var num = 4;
    //   if (num === 0 || num === 1)
    //     return 1;
    //   for (var i = num - 1; i >= 1; i--) {
    //     num *= i;
    //   }
    //   return num;
    // }


    return (
        <div>
            {/*  <button onClick={ran(1, 2, 2)}> click me rest</button> */}
            {/* // they saying that use input type as button and assign a value to it by using this */}
            <br />
            {/* <button onClick={ran2(...arr)}> click me spread </button> */}
            {/* <input  type="button" value={arr} onClick ={...ran2(arr)}> click me </input> */}

            <button onClick={() => factorial(4)}> click </button>
            {/* {factorialize()} */}
        </div>
    );
}
export default PFPractice
