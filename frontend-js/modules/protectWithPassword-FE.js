const axios = require("axios");

export default class ProtectWithPassword {
  constructor() {
    this.listSectionWrapper = document.querySelector("#list-section");
    this.modalOverlay = document.querySelector(".modal-overlay");

    this.events();
  }
  // EVENTS
  events() {
    this.listSectionWrapper.addEventListener("click", (e) => {
      e.target && e.target.id == "overlay-modal" && this.handleCloseModals(e);
      e.target &&
        e.target.id == "delete-list-password-protected" &&
        this.handleOpenModalEnterPassword(e);
      e.target &&
        e.target.id == "submit-btn-protect-with-password-enter-password" &&
        this.handleSubmitPasswordProtectedShoppingList(e);
      e.target &&
        e.target.id == "modal-protect-with-password-enter-password" &&
        this.handleSubmitPasswordProtectedShoppingList(e);
      e.target &&
        e.target.id == "cancel-btn-protect-with-password-enter-password" &&
        this.handleCloseModals(e);
      e.target &&
        e.target.style.display == "block" &&
        e.target.id == "submit-btn-protect-with-password-enter-password" &&
        this.handleSubmitPasswordProtectedShoppingList(e);
    });
  }
  // METHODS
  handleSubmitPasswordProtectedShoppingList(e) {
    if (e.target.parentElement.children[0].value == "") return;
    axios
      .post("/delete-shopping-list", {
        password: e.target.parentElement.children[0].value,
        id: e.target.parentElement.parentElement.children[0].children[1].getAttribute(
          "data-id"
        ),
      })
      .then((res) => {
        e.target.parentElement.parentElement.remove();
      })
      .catch((err) => {
        alert(err);
      });
  }

  handleOpenModalEnterPassword(e) {
    if (
      e.target.parentElement.parentElement.children[2].style.display == "none"
    ) {
      e.target.parentElement.parentElement.children[2].style.display = "block";
      this.modalOverlay.classList.add("active");
      e.target.parentElement.parentElement.children[2].classList.add("active");
    }
  }

  handleCloseModals(e) {
    e.target.parentElement.style.display = "none";
    this.modalOverlay.classList.remove("active");
  }

  // handleOpenModalProtectWithPassword() {
  //   if (this.modalProtectWithPassword.style.display == "none") {
  //     this.modalProtectWithPassword.style.display = "block";
  //     this.modalOverlay.classList.add("active");
  //     this.modalProtectWithPassword.classList.add("active");
  //   }
  // }

  // END CLASS
}
