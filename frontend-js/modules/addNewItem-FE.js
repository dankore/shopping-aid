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
    this.checkboxesWrapperCond = document.querySelector(
      "#checkboxes-wrapper-cond"
    );
    this.checkboxesWrapperMeat = document.querySelector(
      "#checkboxes-wrapper-meat"
    );
    this.checkboxesWrapperFresh = document.querySelector(
      "#checkboxes-wrapper-fresh"
    );
    this.checkboxesWrapperFrozen = document.querySelector(
      "#checkboxes-wrapper-frozen"
    );
    this.checkboxesWrapperKids = document.querySelector(
      "#checkboxes-wrapper-kids"
    );
    this.checkboxesWrapperOthers = document.querySelector(
      "#checkboxes-wrapper-others"
    );
    this.checkboxesWrapperHealth = document.querySelector(
      "#checkboxes-wrapper-health"
    );
    this.checkboxesWrapperElectronics = document.querySelector(
      "#checkboxes-wrapper-electronics"
    );
    this.checkboxesWrapperGrains = document.querySelector(
      "#checkboxes-wrapper-grains"
    );
    this.checkboxesWrapperDairy = document.querySelector(
      "#checkboxes-wrapper-dairy"
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
    this.addNewItemBtn.addEventListener("click", () => this.handleSubmit());
    this.openAddNewItemModal.addEventListener("click", (_) =>
      this.handleOpenModal()
    );
    this.closeAddNewItemModal.addEventListener("click", (_) =>
      this.handleCloseModal()
    );
    this.modalOverlay.addEventListener("click", (_) =>
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
      })
      .catch((err) => {
        alert("Oops! Please try again.");
      });
    this.input.value = "";
    this.input.focus();
  }

  yellowFifa(data) {
    // DATA.CAT IS FOR DELETION PURPOSES
    for (let i = 0; i < data.categories.length; i++) {
      const category = data.categories[i].toLowerCase();
      switch (category) {
        case "fruits":
          data.cat = "Fruits";
          this.checkboxesWrapperFruits.insertAdjacentHTML(
            "afterbegin",
            this.html(data)
          );
          break;
        case "vegetables":
          data.cat = "Vegetables";
          this.checkboxesWrapperVeg.insertAdjacentHTML(
            "afterbegin",
            this.html(data)
          );
          break;
        case "condiments":
          data.cat = "Condiments";
          this.checkboxesWrapperCond.insertAdjacentHTML(
            "afterbegin",
            this.html(data)
          );
          break;
        case "meat":
          data.cat = "Meat";
          this.checkboxesWrapperMeat.insertAdjacentHTML(
            "afterbegin",
            this.html(data)
          );
          break;
        case "fresh":
          data.cat = "Fresh";
          this.checkboxesWrapperFresh.insertAdjacentHTML(
            "afterbegin",
            this.html(data)
          );
          break;
        case "frozen":
          data.cat = "Frozen";
          this.checkboxesWrapperFrozen.insertAdjacentHTML(
            "afterbegin",
            this.html(data)
          );
          break;
        case "kids":
          data.cat = "Kids";
          this.checkboxesWrapperKids.insertAdjacentHTML(
            "afterbegin",
            this.html(data)
          );
          break;
        case "others":
          data.cat = "Others";
          this.checkboxesWrapperOthers.insertAdjacentHTML(
            "afterbegin",
            this.html(data)
          );
          break;
        case "health":
          data.cat = "Health";
          this.checkboxesWrapperHealth.insertAdjacentHTML(
            "afterbegin",
            this.html(data)
          );
          break;
        case "electronics":
          data.cat = "Electronics";
          this.checkboxesWrapperElectronics.insertAdjacentHTML(
            "afterbegin",
            this.html(data)
          );
          break;
        case "grains":
          data.cat = "Grains";
          this.checkboxesWrapperGrains.insertAdjacentHTML(
            "afterbegin",
            this.html(data)
          );
          break;
        case "dairy":
          data.cat = "Dairy";
          this.checkboxesWrapperDairy.insertAdjacentHTML(
            "afterbegin",
            this.html(data)
          );
          break;
      }
    }
  }
  html(data) {
    return `
      <div class="flex justify-between my-1">
        <div class="flex">
          <div id="counter-container" class="flex">
            <button id="decrement-btn" data-dec="-1" class="value-button">
              -
            </button>
            <div id="counter" contenteditable="true">1</div>
            <button id="increment-btn" data-inc="1" class="value-button">
              +
            </button>
            </div>
            <label class="cursor-pointer ml-2" for="${data.item}${"-" + data.cat}"
            >
            <input
              class="cursor-pointer checkbox-select-item"
              type="checkbox"
              id="${data.item}${"-" + data.cat}"
              value="${data.item}"
              data-cat="${
                data.cat == "Frozen" || data.cat == "Fresh" ? data.cat : ""
              }"
            />
            ${data.item} 
          </label>
        </div>
      <button id="delete-item" data-cat="${data.cat}" data-id="${
        data._id
      }" data-item="${data.item}" class="text-red-600">X</button>
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
