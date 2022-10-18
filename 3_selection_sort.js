const array = [0, 1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 5, 67, -6, -4, -56, 674, 10];
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
            count +=1;
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }
    return array;
}

console.log( selectionSort(array));
console.log("count =", count);