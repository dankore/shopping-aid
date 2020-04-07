const axios = require("axios");

export default class AddItem {
  constructor(){
    // this.test = document.querySelectorAll("input[type=checkbox]");
    // this.test2 = document.querySelector("#id-checkbox");
    // this.input = document.querySelector("#main-wrapper");
    this.events();
  }
  // EVENTS 
  events(){
    document.querySelector("#main-wrapper").addEventListener("click", e => this.handleClick2(e))
  }
  // METHODS
  handleClick2(e){
    console.log(e.target);
    // axios.post("/add-items", {item : "hi"}).
    //   then(res => {
    //     console.log(res.data);
    //   })
  }

  // END CLASS
}