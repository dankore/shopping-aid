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
    this.arr.push(e.target.value);

    this.displyaContainer.insertAdjacentHTML(
      "beforeend",
      this.html(e.target.value)
    );
  }
  html(item) {
    return `
    <p>${item}</p>
    `;
  }

  // END CLASS
}
