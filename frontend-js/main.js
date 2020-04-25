"use strict";

import CategorySection from "./modules/categorySection-FE";
import AddNewItem from "./modules/addNewItem-FE";
import shoppingListSection from "./modules/shoppingListSection-FE";
import firstTimeVisit from "./modules/firstTimeVisit-FE";
import firtTimeVisit from "./modules/firstTimeVisit-FE";
import ProtectWithPassword from "./modules/protectWithPassword-FE";

if (document.querySelector(".checkbox-select-item")) {
  new CategorySection();
}
if (document.querySelector(".checkbox-new-item")) {
  new AddNewItem();
}
if (document.querySelector("#list-section")) {
  new shoppingListSection();
}
if (document.querySelector("#btn-save-shopping-list-with-password")) {
  new ProtectWithPassword();
}
firtTimeVisit();
