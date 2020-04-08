const axios = require("axios");

export default class AddNewItem{
  constructor(){
    this.input = document.querySelector("#new-item-input");
    this.checkboxes = document.querySelectorAll("input[type=checkbox]");
    this.arr = [];
    this.events();
  }
  // EVENTS 
  events(){
    Array.prototype.forEach.call(this.checkboxes, checkbox =>{
      checkbox.addEventListener("click", e => this.handleCheckboxClick(e));
    })
  }

  // METHODS
  handleCheckboxClick(e){
    if(e.srcElement.checked){
      this.arr.push(e.target.value);
    } else {
      this.arr.splice(this.arr.indexOf(e.target.value), 1);
    }
    console.log(this.arr);
  }

  // END CLASS
}