function filter(Array, callback) {
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(callback(Array[i])){
            newArray.push(Array[i]);
        }
    }
    return newArray;
}

let validarNum = num => {
    if (typeof num === "number") {
        return  true;
    }
    return false;
}

let array = [1, 2, "tres", "4", 5];
console.log(filter(array, validarNum));