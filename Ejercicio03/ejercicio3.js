function map(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

let array = [1, 2, 3, 4, 5];
let duplicado = map(array, num => num * 2);

console.log(duplicado);
