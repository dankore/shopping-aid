"use strict";
const axios = require("axios");

export default class CategorySection {
  constructor() {
    this.mainWrapper = document.querySelector("#main-wrapper");
    this.viewerContainer = document.querySelector("#viewer");
    this.titleBeforeSave = document.querySelector("#title-before-save");
    this.listSection = document.querySelector("#list-section");
    this.copyTextArea = document.querySelector("#text-area-for-copy");
    this.statsNumShoppingListCreatedSofar = document.querySelector(
      "#num-shopping-list-created"
    );
    this.noShoppingListItemsContainer = document.querySelector(
      "#if-no-shopping-list-items"
    );
    this.events();
    this.arr = [];
  }
  // EVENTS
  events() {
    this.mainWrapper.addEventListener("click", (e) => {
      e.target &&
        e.target.classList.contains("checkbox-select-item") &&
        this.handleCheckBoxClick(e);
      e.target && e.target.id == "category-title" && this.handleOpenClose(e);
      e.target &&
        e.target.id == "items-counter" &&
        this.handleOpenCloseForSpanElem(e);
      e.target && e.target.id == "submit-btn" && this.handleSubmit();
      e.target && e.target.id == "delete-item" && this.handleDeleteItem(e);
      e.target && e.target.id == "copy-text-btn" && this.handleCopyText();
      e.target &&
        e.target.id == "increment-btn" &&
        this.handleCounterIncreaseDecrease(e);
      e.target &&
        e.target.id == "decrement-btn" &&
        this.handleCounterIncreaseDecrease(e);
    });
  }
  // METHODS
  handleCopyText() {
    this.copyTextArea.focus();
    this.copyTextArea.select();
    this.copyTextArea.setSelectionRange(0, 99999); // for mobile devices

    try {
      let textCopied = document.execCommand("copy");
      let msg = textCopied ? "Copied" : "Nothing to copy";
      alert(msg);
    } catch (error) {
      alert("Text was not copied".concat(err));
    }
  }

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
        .catch(() => {
          alert(
            "Only admins are allowed to delete items. Message me at .... to get the username and password."
          );
        });
    }
  }
  handleOpenClose(e) {
    if (e.target.parentElement.children[1].style.display == "none") {
      e.target.parentElement.children[1].style.display = "block";
      e.target.children[0].innerHTML = "&#8897;";
    } else {
      e.target.parentElement.children[1].style.display = "none";
      e.target.children[0].innerHTML = "&#65310;";
    }
  }

  handleOpenCloseForSpanElem(e) {
    if (
      e.target.parentElement.parentElement.parentElement.children[1].style
        .display == "none"
    ) {
      e.target.parentElement.parentElement.parentElement.children[1].style.display =
        "block";
    } else {
      e.target.parentElement.parentElement.parentElement.children[1].style.display =
        "none";
    }
  }

  handleSubmit() {
    // DIS-ALLOW EMPTY FIELD
    if (this.arr.length == 0) return;

    axios
      .post("/add-items", {
        title: this.titleBeforeSave.value,
        items: this.arr,
      })
      .then((res) => {
        this.noShoppingListItemsContainer &&
          (this.noShoppingListItemsContainer.style.display = "none");
        this.listSection.insertAdjacentHTML("afterbegin", this.html(res.data));
        this.titleBeforeSave.value = "";
        this.viewerContainer.innerHTML =`<span class="text-gray-600">This area displays the items you selected</span>`;
        this.titleBeforeSave.focus();
        this.handleStatNumShopListCreated();
        this.arr = [];
      })
      .catch((err) => {
        alert(err);
      });
  }

  handleStatNumShopListCreated() {
    this.statsNumShoppingListCreatedSofar.innerText =
      +this.statsNumShoppingListCreatedSofar.innerText + 1;
  }

  html(data) {
    return (
      `<div class="rounded">
            <div class="flex justify-between background-color border-b border-gray-700 rounded-tr rounded-tl rounded-tr rounded-tl text-white text-xl sm:text-base cursor-pointer uppercase">
              <h2
                id="list-title"
                class="w-full p-2"
                style="overflow-wrap: break-word; min-width: 0px;"
              >
                ${data[0].title}
                <span id="items-counter" class="inline-block ml-4 rounded-full px-2 text-gray-800 bg-white">${data[0].items.length}</span> items
              </h2>
              <button id="delete-list" data-id="${data[0]._id}" class="px-4 rounded-full hover:bg-gray-500">X</button>
            </div>
            <ul id="lists-wrapper" class="mb-3" style="display: none;">` +
      data[0].items
        .map((item) => {
          return `<div
              class="flex justify-between border border-gray-200 bg-white px-2 py-1"
            >
              <li>${item}</li>
              <button id="delete-a-shopping-lists-item"  data-id="${data[0]._id}" data-item="${item}" class="text-red-600">Done</button>
            </div>`;
        })
        .join("") +
      `
            </ul>
        </div>
    `
    );
  }

  handleCounterIncreaseDecrease(e) {
    // CHECK
    if (
      e.target.parentElement.children[1].innerText == "" ||
      isNaN(+e.target.parentElement.children[1].innerText)
    ) {
      e.target.parentElement.children[1].innerText = 1;
    }

    // MATH
    if (+e.target.parentElement.children[1].innerText >= 1) {
      e.target.parentElement.children[1].innerText =
        +e.target.parentElement.children[1].innerText +
        +e.target.getAttribute("data-inc");
    }
    if (+e.target.parentElement.children[1].innerText >= 2) {
      e.target.parentElement.children[1].innerText =
        +e.target.parentElement.children[1].innerText +
        +e.target.getAttribute("data-dec");
    }
  }

  handleCheckBoxClick(e) {
    // ATTACH CATEGORY AND COUNTER VALUES TO EACH CHECKED ELEM
    const value = e.target.getAttribute("data-cat")
      ? e.target.value.concat(
          "(" +
            e.target.getAttribute("data-cat") +
            ")" +
            "[" +
            e.target.parentElement.parentElement.children[0].children[1]
              .innerText +
            "]"
        )
      : e.target.value.concat(
          "[" +
            e.target.parentElement.parentElement.children[0].children[1]
              .innerText +
            "]"
        );
    // CHECK FOR CHECKBOX CHECK
    if (e.srcElement.checked) {
      this.arr.push(value);
    } else {
      this.arr.includes(value) && this.arr.splice(this.arr.indexOf(value), 1);
    }
    // RENDER THE ARRAY
    let newArr = "";
    for (let i = 0; i < this.arr.length; i++) {
      newArr += `<li class="tag">${this.arr[i]}</li>`;
    }

    newArr.length > 0 ? this.viewerContainer.innerHTML = newArr 
        : this.viewerContainer.innerHTML = `<div class="text-center text-gray-400"><div class="text-2xl">Empty</div><div>Selected items appears here</div></div>`;
    this.copyTextArea.innerText = this.arr; // STORES THE SAME TEXT AS THOSE DISPLAYED BELOW FOR COPY
  }

  // END CLASS
}
