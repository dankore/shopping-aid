const axios = require("axios");

export default class ProtectWithPassword {
  constructor() {
    this.listSectionWrapper = document.querySelector("#list-section");
    this.modalOverlay = document.querySelector(".modal-overlay");
    this.btnOpenModalNewPassword = document.querySelector(
      "#btn-save-shopping-list-with-password"
    );
    this.modalCreateNewPassword = document.querySelector(
      "#modal-protect-with-password"
    );
    this.btnCancelModalCreateNewPassword = document.querySelector(
      "#cancel-btn-protect-with-password"
    );
    this.events();
  }
  // EVENTS
  events() {
    this.listSectionWrapper.addEventListener("click", (e) => {
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
    this.btnOpenModalNewPassword.addEventListener("click", () =>
      this.handleOpenModalCreatePassword()
    );
    this.btnCancelModalCreateNewPassword.addEventListener("click", (e) =>
      this.handleCloseModals(e)
    );
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
        if (res.data.owner) {
          this.modalOverlay.classList.remove("active");
          e.target.parentElement.parentElement.remove();
        }
        if (!res.data.owner) {
          alert("Wrong Password. Please try again.");
        }
        if (res.data.array && res.data.array.length == 0) {
          location.reload();
        }
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

  handleOpenModalCreatePassword() {
    if (this.modalCreateNewPassword.style.display == "none") {
      this.modalCreateNewPassword.style.display = "block";
      this.modalOverlay.classList.add("active");
      this.modalCreateNewPassword.classList.add("active");
    }
  }

  // END CLASS
}
