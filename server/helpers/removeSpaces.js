module.exports = function(obj){
     obj.item = obj.item
       .replace(/^\s\s*/, "")
       .replace(/\s\s*$/, "");
     return obj;
}