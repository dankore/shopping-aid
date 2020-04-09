const axios = require("axios");

export default class AddNewItem {
  constructor() {
    this.input = document.querySelector("#new-item-input");
    this.addNewItemBtn = document.querySelector("#add-new-item-btn");
    this.checkboxes = document.querySelectorAll(".checkbox-new-item");
    this.modalOverlay = document.querySelector(".modal-overlay");
    this.openAddNewItemModal = document.querySelector("#open-add-modal");
    this.checkboxesWrapperFruits = document.querySelector(
      "#checkboxes-wrapper-fruits"
    );
    this.addNewItemModal = document.querySelector(
      "#new-item-container-wrapper"
    );
    this.closeAddNewItemModal = document.querySelector(
      "#close-add-new-item-modal"
    );
    this.arr = [];
    this.events();
  }
  // EVENTS
  events() {
    Array.prototype.forEach.call(this.checkboxes, (checkbox) => {
      checkbox.addEventListener("click", (e) => this.handleCheckboxClick(e));
    });
    this.addNewItemBtn.addEventListener("click", (_) => this.handleSubmit());
    this.openAddNewItemModal.addEventListener("click", (_) =>
      this.handleOpenModal()
    );
    this.closeAddNewItemModal.addEventListener("click", (_) =>
      this.handleCloseModal()
    );
  }

  // METHODS
  handleCloseModal() {
    this.modalOverlay.classList.remove("active");
    this.addNewItemModal.style.display = "none";
    this.openAddNewItemModal.style.visibility = "visible";
  }

  handleOpenModal() {
    if (this.addNewItemModal.style.display == "none") {
      this.addNewItemModal.style.display = "block";

      this.modalOverlay.classList.add("active");
      this.addNewItemModal.classList.add("active");
      this.openAddNewItemModal.style.visibility = "hidden";
      this.input.focus();
    }
  }

  handleSubmit() {
    // DIS-ALLOW EMPTY FIELDS
    if (!this.input.value || this.arr.length == 0) return;

    axios
      .post("/add-new-item", {
        item: this.input.value,
        categories: this.arr,
      })
      .then((res) => {
        this.yellowFifa(res.data);
      });
    this.input.value = "";
    this.input.focus();
  }
  yellowFifa(data) {
    for (let i = 0; i < data.categories.length; i++) {
      const elem = data.categories[i].toLowerCase();
      switch (elem) {
        case "fruits":
          this.checkboxesWrapperFruits.insertAdjacentHTML(
            "afterbegin",
            this.html(data.item)
          );
          break;
      }
    }
  }
  html(item) {
    return `
     <label class="cursor-pointer" for="${item}">
        <input
          class="cursor-pointer checkbox-select-item"
          type="checkbox"
          id="${item}"
          value="${item}"
        />
        ${item} </label
      ><br />
    `;
  }

  handleCheckboxClick(e) {
    if (e.srcElement.checked) {
      this.arr.push(e.target.value);
    } else {
      this.arr.splice(this.arr.indexOf(e.target.value), 1);
    }
    console.log(this.arr);
  }

  // END CLASS
}
