import SelectItem from "./modules/selectItem";
import AddNewItem from "./modules/addNewItem";
import ShoppingList from "./modules/listSection";

if (document.querySelector(".checkbox-select-item")) {
  new SelectItem();
}
if (document.querySelector(".checkbox-new-item")) {
  new AddNewItem();
}
if (document.querySelector("#list-section")) {
  new ShoppingList();
}
