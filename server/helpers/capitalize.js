module.exports = function(obj){
    if (typeof obj.item != "string") return obj;
    obj.item = obj.item.split(" ");
    let str = "";

    for (let i = 0; i < obj.item.length; i++) {
      for (let j = 0; j < obj.item[i].length; j++) {
        j == 0 && (str += obj.item[i][j].toUpperCase());
        j > 0 && (str += obj.item[i][j].toLowerCase());
      }
      // ADD A SPACE AFTER A WORD BUT DONT AT END OF THE WORDS ARRAY
      obj.item[i] != obj.item[obj.item.length - 1] &&
        (str += " ");
    }

    obj.item = str;
    return obj;
}