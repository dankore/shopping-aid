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
        this.input = document.querySelector("#input-protect-with-password");
        this.submitBtn = document.querySelector("#submit-btn-protect-with-password");
        
        this.events();
    }
    // EVENTS
    events(){
        this.BtnModalProtectWithPassword.addEventListener("click", ()=> this.handleOpenModalProtectWithPassword());
        this.modalOverlay.addEventListener("click", ()=> this.handleModalProtectWithPassword());
        this.submitBtn.addEventListener("click", ()=> this.handleSubmit());
    }
    // METHODS
    handleSubmit(){
        console.log()
        axios.post("/protect-with-password", {password: this.input.value})
        .then(res =>{
            //
            this.input.value = "";
        })
        .catch((err)=>{
            alert(err)
        })
    }
    handleModalProtectWithPassword(){
        this.modalProtectWithPassword.style.display = "none";
        this.modalOverlay.classList.remove("active");
    }

    handleOpenModalProtectWithPassword(){
      if (this.modalProtectWithPassword.style.display == "none") {
      this.modalProtectWithPassword.style.display = "block";

      this.modalOverlay.classList.add("active");
      this.modalProtectWithPassword.classList.add("active");
      this.input.focus();
    }
  }

  // END CLASS
}