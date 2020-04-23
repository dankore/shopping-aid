const axios = require("axios");

export default class ProtectWithPassword {
  constructor() {
    this.BtnModalProtectWithPassword = document.querySelector(
      "#open-protect-with-password-modal"
    );
    this.modalProtectWithPassword = document.querySelector(
      "#modal-protect-with-password"
    );
    this.modalOverlay = document.querySelector(".modal-overlay");
    this.cancelModalBtn = document.querySelector(
      "#cancel-btn-protect-with-password"
    );
    this.deleteEntireShoppingListBtnPasswordProtected = document.querySelector(
      "#delete-list-password-protected"
    );
    this.modalEnterPasswordShoppingList = document.querySelector(
      "#modal-protect-with-password-enter-password"
    );
    this.cancelBtnEnterPasswordShoppingList = document.querySelector(
      "#cancel-btn-protect-with-password-enter-password"
    );
    this.submitBtnEnterPasswordShoppingList = document.querySelector(
      "#submit-btn-protect-with-password-enter-password"
    );
    this.inputEnterPasswordShoppingList = document.querySelector(
      "#input-protect-with-password-enter-password"
    );
    this.events();
  }
  // EVENTS
  events() {
    this.BtnModalProtectWithPassword.addEventListener("click", () =>
      this.handleOpenModalProtectWithPassword()
    );
    this.modalOverlay.addEventListener("click", () => this.handleCloseModals());
    this.cancelModalBtn.addEventListener("click", () =>
      this.handleCloseModals()
    );
    this.deleteEntireShoppingListBtnPasswordProtected &&
      this.deleteEntireShoppingListBtnPasswordProtected.addEventListener(
        "click",
        () => this.handleOpenModalEnterPassword()
      );
    this.cancelBtnEnterPasswordShoppingList.addEventListener("click", () =>
      this.handleCloseModals()
    );
    this.submitBtnEnterPasswordShoppingList.addEventListener("click", (e) =>
      this.handleSubmitPasswordProtectedShoppingList(e)
    );
  }
  // METHODS
  handleSubmitPasswordProtectedShoppingList(e) {
    if (this.inputEnterPasswordShoppingList.value == "") return;
    axios
      .post("/delete-shopping-list", {
        password: this.inputEnterPasswordShoppingList.value,
        id: this.deleteEntireShoppingListBtnPasswordProtected.getAttribute(
          "data-id"
        ),
      })
      .then((res) => {
        console.log(res.data);
        console.log(e.target);
        // e.target.parentElement.parentElement.remove();
      })
      .catch((err) => {
        alert(err);
      });
  }

  handleOpenModalEnterPassword() {
    if (this.modalEnterPasswordShoppingList.style.display == "none") {
      this.modalEnterPasswordShoppingList.style.display = "block";
      this.modalOverlay.classList.add("active");
      this.modalEnterPasswordShoppingList.classList.add("active");
    }
  }

  handleCloseModals() {
    this.modalProtectWithPassword &&
      (this.modalProtectWithPassword.style.display = "none");
    this.modalOverlay.classList.remove("active");
    this.modalEnterPasswordShoppingList &&
      (this.modalEnterPasswordShoppingList.style.display = "none");
  }

  handleOpenModalProtectWithPassword() {
    if (this.modalProtectWithPassword.style.display == "none") {
      this.modalProtectWithPassword.style.display = "block";
      this.modalOverlay.classList.add("active");
      this.modalProtectWithPassword.classList.add("active");
    }
  }

  // END CLASS
}
