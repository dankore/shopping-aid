export default class ShoppingList {
  constructor() {
    this.listSectionWrapper = document.querySelector("#list-section");
    this.events();
  }
  // EVENTS
  events() {
    this.listSectionWrapper.addEventListener("click", (e) => {
      e.target && e.target.id == "list-title" && this.handleCloseOpen(e);
    });
  }
  // METHODS
  handleCloseOpen(e) {
    if ((e.target.parentElement.children[1].style.display == "none")) {
      e.target.parentElement.children[1].style.display = "block";
    } else {
      e.target.parentElement.children[1].style.display = "none";
    }
  }
}
