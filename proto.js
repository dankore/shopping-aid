let arr = [
  { item: "ee", categories: ["Fruits"] },
  { item: "wes", categories: ["Condiments", "Frozen"] },
  { item: "ss", categories: ["Condiments", "Frozen"] },
  { item: "apple", categories: ["Fruits", "Vegetables"] },
  { item: "appl", categories: ["Vegetables", "Fruits"] },
  { item: "Apple", categories: ["Fruits"] },
  { item: "e", categories: ["Fruits"] },
  { item: "pepper", categories: ["Vegetables", "Fruits"] },
  { item: "3434", categories: ["Fruits", "Vegetables"] },
  { item: "a", categories: ["Fruits", "Vegetables"] },
  { item: "b", categories: ["Fruits", "Vegetables"] },
];

function sort(array){
let fruits = [],
  veg = [],
  cond = [],
  frozen = []

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  element.categories.indexOf("Fruits") != -1 && fruits.push(element.item);
  element.categories.indexOf("Vegetables") != -1 && veg.push(element.item);
  element.categories.indexOf("Condiments") != -1 && cond.push(element.item);
  element.categories.indexOf("Frozen") != -1 && frozen.push(element.item);
}

// console.log(fruits);
// console.log(veg);
// console.log(cond);
// console.log(frozen);
return [fruits, veg, cond, frozen]
}

console.log(sort(arr));
