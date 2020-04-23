const axios = require("axios");

export default class ProtectWithPassword {
    constructor(){
        this.BtnModalProtectWithPassword = document.querySelector(
        "#open-protect-with-password-modal"
        );
        this.modalProtectWithPassword = document.querySelector(
        "#modal-protect-with-password"
        );
        this.modalOverlay = document.querySelector(".modal-overlay");
        this.cancelModalBtn = document.querySelector("#cancel-btn-protect-with-password");
        this.events();
    }
    // EVENTS
    events(){
        this.BtnModalProtectWithPassword.addEventListener("click", () => this.handleOpenModalProtectWithPassword());
        this.modalOverlay.addEventListener("click", () => this.handleCloseModalProtectWithPassword());
        this.cancelModalBtn.addEventListener("click", () => this.handleCloseModalProtectWithPassword());
    }
    // METHODS
    handleCloseModalProtectWithPassword(){
        this.modalProtectWithPassword.style.display = "none";
        this.modalOverlay.classList.remove("active");
    }

    handleOpenModalProtectWithPassword(){
      if (this.modalProtectWithPassword.style.display == "none") {
      this.modalProtectWithPassword.style.display = "block";
      this.modalOverlay.classList.add("active");
      this.modalProtectWithPassword.classList.add("active");
    }
  }

  // END CLASS
}