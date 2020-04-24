const axios = require("axios");

export default class shoppingListSection {
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
      e.target &&
        e.target.id == "delete-a-shopping-lists-item" &&
        this.handleDeleteShoppingListItem(e);
    });
  }
  // METHODS
  handleDeleteShoppingListItem(e) {
    let spanElem =
      e.target.parentElement.parentElement.parentElement.children[0].children[0]
        .children[0];
    if (confirm("Are you sure?")) {
      axios
        .post("/delete-a-shopping-list-item", {
          id: e.target.getAttribute("data-id"),
          listItem: e.target.getAttribute("data-item"),
        })
        .then(() => {
          e.target.parentElement.remove();
          spanElem.innerHTML = +spanElem.innerHTML - 1;
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  handleDeleteShoppingList(e) {
    if (confirm("Delete Shopping List?")) {
      axios
        .post("/delete-shopping-list", {
          id: e.target.getAttribute("data-id"),
        })
        .then((res) => {
          e.target.parentElement.parentElement.remove();
          res.data.array.length == 0 && location.reload();
        })
        .catch((err) => {
          alert(err);
        });
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
