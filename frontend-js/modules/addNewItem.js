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
    this.checkboxesWrapperVeg = document.querySelector(
      "#checkboxes-wrapper-veg"
    );
    this.addNewItemModal = document.querySelector(
      "#new-item-container-wrapper"
    );
    this.closeAddNewItemModal = document.querySelector(
      "#close-add-new-item-modal"
    );
    this.noItemContainer = document.querySelector("#no-item-container");
    this.arr = [];
    this.events();
  }
  // EVENTS
  events() {
    Array.prototype.forEach.call(this.checkboxes, (checkbox) => {
      checkbox.addEventListener("click", (e) => this.handleCheckboxClick(e));
    });
    this.addNewItemBtn.addEventListener("click", (e) => this.handleSubmit(e));
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

  handleSubmit(e) {
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
            this.html(data)
          );
          break;
        case "vegetables":
          this.checkboxesWrapperVeg.insertAdjacentHTML(
            "afterbegin",
            this.html(data)
          );
          break;
      }
    }
  }
  html(data) {
    return `
      <div class="flex justify-between">
        <label class="cursor-pointer" for="${data.item}">
            <input
              class="cursor-pointer checkbox-select-item"
              type="checkbox"
              id="${data.item}"
              value="${data.item}"
            />
            ${data.item} 
        </label>
        <button id="delete-item" data-cat="Vegetables" data-id="${data._id}" data-item="${data.item}" class="text-red-600">X</button>
      </div>
    `;
  }

  handleCheckboxClick(e) {
    if (e.srcElement.checked) {
      this.arr.push(e.target.value);
    } else {
      this.arr.splice(this.arr.indexOf(e.target.value), 1);
    }
  }

  // END CLASS
}
