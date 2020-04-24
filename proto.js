let str = "Diaper Size 2[15]"; // <span>Banana</span><span>1</span>

function d(){
  return str.replace("]", "").split("[")
  
}

console.log(d())

// ALT SHIFT ARROW UP DOWN
// ALT ARROW UP DOWN

// function htmlize() {
//   let s = {
//     word: "",
//     num: "",
//   };
//   for (let i = 0; i < str.length; i++) {
   
//     str.charCodeAt(i) == 32 && (s.word += "&nbsp;");
//     !(
//       str.charCodeAt(i) == 91 ||
//       str.charCodeAt(i) == 93 ||
//       str[i] == 1 ||
//       str[i] == 2 ||
//       str[i] == 3 ||
//       str[i] == 4 ||
//       str[i] == 5 ||
//       str[i] == 6 ||
//       str[i] == 7 ||
//       str[i] == 8 ||
//       str[i] == 9 ||
//       str[i] == 0
//     ) && (s.word += str[i]);
//     (str[i] == 1 ||
//       str[i] == 2 ||
//       str[i] == 3 ||
//       str[i] == 4 ||
//       str[i] == 5 ||
//       str[i] == 6 ||
//       str[i] == 7 ||
//       str[i] == 8 ||
//       str[i] == 9 ||
//       str[i] == 0) &&
//       (s.num += str[i]);

    
//   }
//   console.log(s.num)
//   console.log(s.num.trimLeft());
//   return `${s.word}<span>${s.num.trimLeft()}</span>`;
// }
// console.log(htmlize());

// let obj = {
//   item: "apple",
//   categories: [],
// };
// function c() {
//   if (typeof obj.item != "string") return obj;
//   obj.item = obj.item.split(" ");

//   let str = "";
//   for (let i = 0; i < obj.item.length; i++) {
//     for (let j = 0; j < obj.item[i].length; j++) {
//       j == 0 && (str += obj.item[i][j].toUpperCase());
//       j > 0 && (str += obj.item[i][j].toLowerCase());
//     }

//     obj.item[i] != obj.item[obj.item.length - 1] && (str += " ");
//   }
//   obj.item = str;
//   return obj;
// }
// console.log(c());

// function replace(str, t){
//     let res = "";
//     let reg = /^\s\s*/g
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];

//     }
// }

// let obj = {
//     add: () =>{
//         return obj.sayHi();
//     },
//     sayHi: () => {
//         return "Hi!"
//     }
// }

// console.log(obj.add())

// const data = [
// "absolutely",
// "adorable",
// "accepted",
// "acclaimed",
// 'accomplish',
// 'accomplishment',
// 'achievement',
// 'action',
// "active",
// "admire",
// "adventure",
// "affirmative",
// "affluent",
// "agree",
// "agreeable",
// "amazing",
// "angelic",
// "appealing",
// "approve",
// "aptitude",
// "attractive",
// "awesome",
// 'beaming',
// 'beautiful',
// 'believe',
// 'beneficial',
// 'bliss',
// 'bountiful',
// 'bounty',
// 'brave',
// 'bravo',
// 'brilliant',
// 'bubbly',
// 'calm',
// 'celebrated',
// 'certain',
// 'champ',
// 'champion',
// 'charming',
// 'cheery',
// 'choice',
// 'classic',
// 'classical',
// 'clean',
// 'commend',
// 'composed',
// 'congratulation',
// 'constant',
// 'cool',
// 'courageous'
// ]
// function uniqId(){
//     const idx = random50();
//     const num = random10000();

//     return data[idx].concat(num).concat("-list")
// }

// function random50(){
//     // GENERATE A RANDOM NUM FROM 0 TO 50 BOTH EDGES INCLUDED
//     const min = 0, max = 51;
//     return Math.floor(Math.random() * (max-min))+min;
// }

// function random10000(){
//     // GENERATE A RANDOM NUM FROM 0 TO 10,000 BOTH EDGES INCLUDED
//     const min = 0, max = 10000;
//     return Math.floor(Math.random() * (max-min))+min;
// }
// console.log(uniqId())

// function range(array){
//     let start = 0;
//     let end = 0;
//     let store = [];

//     for (let i = 1; i < array.length; i++) {

//        if(array[i] - array[end] == 1){
//            end++;
//        }else{
//         addRange(array, store, start, end);
//         start = i;
//         end = i;
//        }
//     }
//     addRange(array, store, start, end);
//     return store;
// }

// function addRange(arr, strArr, start, end){
//     if(start != end){
//         strArr.push(arr[start] + "=>" + arr[end])
//     } else {
//         strArr.push(""+arr[start])
//     }
// }
// console.log(range([-1,0,1,2,6,7,9]))
// console.log(range([-5,3,4,5,20,21,22]))

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
