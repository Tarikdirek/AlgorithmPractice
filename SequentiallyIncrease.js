function longestIncreasingSubarray(arr) {
    let maxSequence = [];
    let currentSequence = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] > arr[i - 1]) {
            currentSequence.push(arr[i]); // Artan sıraya ekle
        } else {
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence; // Şimdiye kadarki en uzunu kaydet
            }
            currentSequence = [arr[i]]; // Yeni alt dizi başlat
        }
    }

    // Son karşılaştırmayı yapmak için
    if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
    }

    return maxSequence;
}

console.log(longestIncreasingSubarray([1, 2, 1, 3, 4, 8, 7, 9]));