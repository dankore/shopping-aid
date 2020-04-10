const axios = require("axios");

export default class SelectItem {
  constructor() {
    this.mainWrapper = document.querySelector("#main-wrapper");
    this.viewerContainer = document.querySelector("#viewer");
    this.events();
    this.arr = [];
    this.viewer();
  }
  // EVENTS
  events() {
    this.mainWrapper.addEventListener("click", (e) => {
      e.target &&
        e.target.classList.contains("checkbox-select-item") &&
        this.handleCheckBoxClick(e);
      e.target && e.target.id == "category-title" && this.handleOpenClose(e);
      e.target && e.target.id == "submit-btn" && this.handleSubmit(e);
      e.target && e.target.id == "delete-item" && this.handleDeleteItem(e);
    });
  }
  // METHODS
  handleDeleteItem(e) {
    if (confirm("Are you sure?")) {
      axios
        .post("/delete-item", {
          id: e.target.getAttribute("data-id"),
          item: e.target.getAttribute("data-item"),
          category: e.target.getAttribute("data-cat"),
        })
        .then(() => {
          e.target.parentElement.remove();
        })
        .catch((err) => {
          alert(err);
        });
    }
  }
  handleOpenClose(e) {
    if (e.target.nextElementSibling.style.display == "none") {
      e.target.nextElementSibling.style.display = "block";
    } else {
      e.target.nextElementSibling.style.display = "none";
    }
  }

  handleSubmit(e) {
    // DIS-ALLOW EMPTY FIELD
    if (this.arr.length == 0) return;

    axios.post("/add-items", { items: this.arr });
  }
  viewer() {}
  handleCheckBoxClick(e) {
    if (e.srcElement.checked) {
      this.arr.push(e.target.value);
    } else {
      this.arr.splice(this.arr.indexOf(e.target.value), 1);
    }
    this.viewerContainer.innerHTML = `<strong>${this.arr}</strong>`;
  }

  // END CLASS
}
