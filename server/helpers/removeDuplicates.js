module.exports = function(array){
    const map = new Map();

    for (let i = 0; i < array.length; i++) {
        !map.has(array[i]) && map.set(array[i], i);        
    }
    return [...map.keys()];
}