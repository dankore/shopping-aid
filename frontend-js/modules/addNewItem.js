const axios = require("axios");

export default class AddNewItem{
  constructor(){
    this.input = document.querySelector("#new-item-input");
    this.addNewItemBtn = document.querySelector("#add-new-item-btn");
    this.checkboxes = document.querySelectorAll(".checkbox-new-item");
    this.modalOverlay = document.querySelector(".modal-overlay");
    this.openAddNewItemModal = document.querySelector("#open-add-modal");
    this.addNewItemModal = document.querySelector("#new-item-container-wrapper");
    this.arr = [];
    this.events();
  }
  // EVENTS 
  events(){
    Array.prototype.forEach.call(this.checkboxes, checkbox =>{
      checkbox.addEventListener("click", e => this.handleCheckboxClick(e));
    });
    this.addNewItemBtn.addEventListener("click", e => this.handleSubmit(e));
    this.openAddNewItemModal.addEventListener("click", e => this.handleOpenCloseModal(e));
  }

  // METHODS
  handleOpenCloseModal(e){
    if (this.addNewItemModal.style.display == "none") {
      this.addNewItemModal.style.display = "block";

      this.modalOverlay.classList.add("active");
      this.addNewItemModal.classList.add("active");
      this.openAddNewItemModal.style.display = "none";
    }
  }

  handleSubmit(e){
    // DIS-ALLOW EMPTY FIELDS
    if(!this.input.value || this.arr.length == 0) return;
    
    axios.post("/add-new-item", {item : this.input.value, categories: this.arr });
    this.input.value = "";
    this.input.focus();
  }
  handleCheckboxClick(e){
    if(e.srcElement.checked){
      this.arr.push(e.target.value);
    } else {
      this.arr.splice(this.arr.indexOf(e.target.value), 1);
    }
    console.log(this.arr);
  }

  // END CLASS
}