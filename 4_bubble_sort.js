const array = [0, 1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 5, 67, -6, -4, -56, 674, 10];
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            count += 1;
        }

    }
    return array;
}

console.log(bubbleSort(array));
console.log("count =", count);