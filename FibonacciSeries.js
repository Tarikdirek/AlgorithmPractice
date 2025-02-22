function fibonacciSeries(num) {
    let series = [0,1]
    for (let i = 0; i <= num-1; i++) {
        series.push(series[i] + series[i+1])
    }
    if (series.includes(num)) {
        return true
    }
    return false

}

console.log(fibonacciSeries(13));
