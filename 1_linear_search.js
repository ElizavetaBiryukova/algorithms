const array = [1, 4, 5, 7, 3, 12, 10];

let count = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(array , 12));
console.log("count =", count);