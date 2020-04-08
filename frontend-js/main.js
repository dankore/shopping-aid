import SelectItem from "./modules/selectItem";
import AddNewItem from "./modules/addNewItem";

if(document.querySelector(".checkbox-select-item")){
  new SelectItem();
}
if(document.querySelector(".checkbox-new-item")){
  new AddNewItem();
}