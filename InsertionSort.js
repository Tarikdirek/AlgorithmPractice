function insertionSort(arr) {

    for (let i = 1; i < arr.length ; i++) {
         let currentElement = arr[i];
         let j = i - 1;
         while (j >= 0 && arr[j]> currentElement) {
            arr[j+1] = arr[j]
            j--;
         }
         arr[j+1] =currentElement;
    }
    return arr;
}

// Test
console.log(insertionSort([4, 2, 3, 1, 5])); // [1, 2, 3, 4, 5]