import CategorySection from "./modules/categorySection-FE";
import AddNewItem from "./modules/addNewItem-FE";
import shoppingListSection from "./modules/shoppingListSection-FE";

if (document.querySelector(".checkbox-select-item")) {
  new CategorySection();
}
if (document.querySelector(".checkbox-new-item")) {
  new AddNewItem();
}
if (document.querySelector("#list-section")) {
  new shoppingListSection();
}
