const axios = require("axios");

export default class ShoppingList {
  constructor() {
    this.listSectionWrapper = document.querySelector("#list-section");
    this.events();
  }
  // EVENTS
  events() {
    this.listSectionWrapper.addEventListener("click", (e) => {
      e.target && e.target.id == "list-title" && this.handleCloseOpen(e);
      e.target &&
        e.target.id == "delete-list" &&
        this.handleDeleteShoppingList(e);
    });
  }
  // METHODS
  handleDeleteShoppingList(e) {
    console.log(e.target.parentElement.parentElement);
    if (confirm("Delete Shopping List?")) {
      axios.post("/delete-shopping-list", {
        id: e.target.getAttribute("data-id"),
      });
      e.target.parentElement.parentElement.remove();
    }
  }

  handleCloseOpen(e) {
    if (
      e.target.parentElement.parentElement.children[1].style.display == "none"
    ) {
      e.target.parentElement.parentElement.children[1].style.display = "block";
    } else {
      e.target.parentElement.parentElement.children[1].style.display = "none";
    }
  }
}
