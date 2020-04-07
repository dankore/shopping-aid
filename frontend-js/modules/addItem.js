const axios = require("axios");

export default class AddItem {
  constructor() {
    this.checkboxes = document.querySelectorAll("input[type=checkbox]");
    this.events();
  }
  // EVENTS
  events() {
    Array.prototype.forEach.call(this.checkboxes, (checkbox) => {
      checkbox.addEventListener("click", (e) => this.handleClick(e));
    });
  }
  // METHODS
  handleClick(e) {
    axios.post("/add-items", { item: e.target.value }).then((res) => {
      console.log(res.data);
    });
  }

  // END CLASS
}
