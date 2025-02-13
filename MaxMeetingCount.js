function maxMeetingCount(arr) {
    let arrCol = arr[0].length - 1;
    let arrRow = arr.length
    let count = 0;
    for (let i = 0; i < arrRow; i++) {
        for (let j = 0; j < arrCol ; j++) {
            if (arr[i][j]>=arr[0][0] && arr[i][j]<=arr[0][1]) {
                count++;
            }
        }
    }
    return count;
}

console.log(maxMeetingCount([[7, 10], [2, 4]]));
