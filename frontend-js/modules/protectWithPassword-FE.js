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
        this.handleDeletePasswordProtectedShoppingList(e);
      e.target &&
        e.target.id == "cancel-btn-protect-with-password-enter-password" &&
        this.handleCloseModals(e);
      e.target &&
        e.target.id == "list-title-password-protected" &&
        this.handleOpenModalEnterPassword(e);
      e.target &&
        e.target.id == "submit-btn-unlock-shopping-list" &&
        this.handleSubmitUnlockShoppingList(e);
    });
    this.btnOpenModalNewPassword.addEventListener("click", () =>
      this.handleOpenModalCreatePassword()
    );
    this.btnCancelModalCreateNewPassword.addEventListener("click", (e) =>
      this.handleCloseModals(e)
    );
  }
  // METHODS
  handleSubmitUnlockShoppingList(e) {
    if (e.target.parentElement.children[0].value == ""){
      alert("Password field is empty!");
      return;
    }
      axios
        .post("/unlock-shopping-list", {
          password: e.target.parentElement.children[0].value,
          id: e.target.parentElement.parentElement.children[0].children[1].getAttribute(
            "data-id"
          ),
        })
        .then((res) => {
          if (res.data.owner) {
            this.modalOverlay.classList.remove("active");
            e.target.parentElement.style.display = "none";
            e.target.parentElement.parentElement.children[1].style.display =
              "block"; // <UL> ELEM
            e.target.parentElement.parentElement.children[0].children[0].id =
              "list-title"; // <H2> ELEM
            e.target.parentElement.parentElement.children[2].children[1].id =
              "submit-btn-protect-with-password-enter-password"; // SUBMIT BUTTON MODAL
            e.target.parentElement.parentElement.children[0].children[0].children[2].setAttribute(
              "src",
              "/static/unlock.svg"
            ); // <IMG> ELEM
          }
          if (!res.data.owner) {
            alert("Wrong Password. Please try again.");
          }
        })
        .catch((err) => {
          alert(err);
        });
  }

  handleDeletePasswordProtectedShoppingList(e) {
     if (e.target.parentElement.children[0].value == "") {
       alert("Password field is empty!");
       return;
     }
     
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
      if (e.target.id == "delete-list-password-protected") {
        e.target.parentElement.parentElement.children[2].children[1].id =
          "submit-btn-protect-with-password-enter-password"; // SUBMIT BUTTON MODAL
      }
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
