function range(array){
    let start = 0;
    let end = 0;
    let store = [];

    for (let i = 1; i < array.length; i++) {
        
       if(array[i] - array[end] == 1){
           end++;
       }else{
        addRange(array, store, start, end);
        start = i;
        end = i;
       }
    }
    addRange(array, store, start, end);
    return store;
}

function addRange(arr, strArr, start, end){
    if(start != end){
        strArr.push(arr[start] + "=>" + arr[end])
    } else {
        strArr.push(""+arr[start])
    }
}
console.log(range([-1,0,1,2,6,7,9]))
console.log(range([-5,3,4,5,20,21,22]))




// let arr = [    
//   { _id: "5e8f13ae5db21d3b2dbcd71f",
//     item: 'appl',
//     categories: [ 'Vegetables', 'Fruits' ] },
//   { _id:"5e8f16815db21d3b2dbd50f9",
//     item: 'Apple',
//     categories: [ 'Fruits' ] },
//   { _id: "5e8f246e5db21d3b2dbfda86",
//     item: 'e',
//     categories: [ 'Fruits' ] },
//   { _id: "5e8f25a25db21d3b2dc01bc8",
//     item: 'pepper',
//     categories: [ 'Vegetables', 'Fruits' ] },
//   { _id: "5e8f307f5db21d3b2dc22a36",
//     item: '3434',
//     categories: [ 'Fruits', 'Vegetables' ] }
// ];


// let date = new Date();
// let y = date.getFullYear();
// let mo = date.getMonth();
// let d = date.getDate();
// let h = date.getUTCHours();
// let m = date.getMinutes();
// let s = date.getSeconds();

// let t = date.getTime();

// console.log(t);


// function sort(array){
// let fruits = [],
//   veg = [],
//   cond = [],
//   frozen = []

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   element.categories.indexOf("Fruits") != -1 &&
//     fruits.push([element._id, element.item]);
// //   element.categories.indexOf("Vegetables") != -1 && veg.push(element.item);
// //   element.categories.indexOf("Condiments") != -1 && cond.push(element.item);
// //   element.categories.indexOf("Frozen") != -1 && frozen.push(element.item);
// }

// // console.log(fruits);
// // console.log(veg);
// // console.log(cond);
// // console.log(frozen);
// return fruits
// }

// console.log(sort(arr));
