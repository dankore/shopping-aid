const axios = require("axios");

export default class AddItem {
  constructor() {
    this.checkboxes = document.querySelectorAll("input[type=checkbox]");
    this.displyaContainer = document.querySelector("#display-content");
    this.submitBtn = document.querySelector("#submit-btn");
    this.events();
    this.arr = [];
  }
  // EVENTS
  events() {
    Array.prototype.forEach.call(this.checkboxes, (checkbox) => {
      checkbox.addEventListener("click", (e) => this.handleClick(e));
    });
    this.submitBtn.addEventListener("click", (e) => this.handleSubmit(e));
  }
  // METHODS
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
