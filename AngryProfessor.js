function angryProfessor(k,a) {
    let count = 0;
    for (let num of a) {
        if (num <= 0) {
            count++;
        }
    }
    if (count < k) {
        return "YES";
    } else {
        return "NO";
    }
}