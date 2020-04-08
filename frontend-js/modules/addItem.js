const axios = require("axios");

export default class AddItem {
  constructor() {
    this.checkboxes = document.querySelectorAll("input[type=checkbox]");
    this.checkboxesWrapper = document.querySelector("#checkboxes-wrapper");
    this.categoryTitle = document.querySelectorAll("#category-title");
    this.submitBtn = document.querySelector("#submit-btn");
    this.events();
    this.arr = [];
  }
  // EVENTS
  events() {
    Array.prototype.forEach.call(this.checkboxes, (checkbox) => {
      checkbox.addEventListener("click", (e) => this.handleClick(e));
    });
    Array.prototype.forEach.call(this.categoryTitle, (title) => {
      title.addEventListener("click", (e) => this.handleOpenClose(e));
    });
    this.submitBtn.addEventListener("click", (e) => this.handleSubmit(e));
  }
  // METHODS
  handleOpenClose(e){
    if(this.checkboxesWrapper.style.display == "none"){
      this.checkboxesWrapper.style.display = "block";
    } else {
      this.checkboxesWrapper.style.display = "none";
    }
  }
  
  handleSubmit(e) {
    axios.post("/add-items", { items: this.arr });
  }

  handleClick(e) {
    if (e.srcElement.checked) {
      this.arr.push(e.target.value);
    } else {
      this.arr.splice(this.arr.indexOf(e.target.value), 1);
    }
    console.log(this.arr);
  }

  // END CLASS
}
