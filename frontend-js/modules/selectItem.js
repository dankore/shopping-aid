const axios = require("axios");

export default class SelectItem {
  constructor() {
    this.mainWrapper = document.querySelector("#main-wrapper");
    this.viewerContainer = document.querySelector("#viewer");
    this.titleBeforeSave = document.querySelector("#title-before-save");
    this.listSection = document.querySelector("#list-section");
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
    if (e.target.parentElement.children[1].style.display == "none") {
      e.target.parentElement.children[1].style.display = "block";
    } else {
      e.target.parentElement.children[1].style.display = "none";
    }
  }

  handleSubmit(e) {
    // DIS-ALLOW EMPTY FIELD
    if (this.arr.length == 0) return;

    axios
      .post("/add-items", {
        title: this.titleBeforeSave.value,
        items: this.arr,
      })
      .then((res) => {
        this.listSection.insertAdjacentHTML("afterbegin", this.html(res.data));
        this.titleBeforeSave.value = "";
        this.viewerContainer.innerHTML = "";
        this.titleBeforeSave.focus();
        this.arr = [];
      })
      .catch((err) => {
        alert(err);
      });
  }
  html(data) {
    return (
      `<div class="mb-5 rounded">
            <div class="flex justify-between bg-gray-800 rounded-tr rounded-tl text-white cursor-pointer uppercase">
              <h2
                id="list-title"
                class="w-full p-2"
              >
                ${data[0].title}
              </h2>
              <button id="delete-list" data-id="${data[0]._id}" class="px-4 rounded-full hover:bg-gray-500">X</button>
            </div>
            <ul id="lists-wrapper" style="display: none;">` +
      data[0].items
        .map((item) => {
          return `<div
              class="flex justify-between border border-gray-200 bg-white px-2 py-1"
            >
              <li>${item}</li>
              <button class="text-red-600">Done</button>
            </div>`;
        })
        .join("") +
      `
            </ul>
        </div>
    `
    );
  }

  handleCheckBoxClick(e) {
    if (e.srcElement.checked) {
      !this.arr.includes(e.target.value) && this.arr.push(e.target.value);
    } else {
      this.arr.splice(this.arr.indexOf(e.target.value), 1);
    }
    // RENDER THE ARRAY
    let newArr = "";
    for (let i = 0; i < this.arr.length; i++) {
      newArr += `<span>${this.arr[i]}, </span>`;
    }

    this.viewerContainer.innerHTML = newArr;
  }

  // END CLASS
}
