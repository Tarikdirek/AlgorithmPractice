function hurdleRace(k, height) {
    // Write your code here
    height.sort((x,y) => x - y);
    if (height[height.length - 1] - k === 0 || height[height.length - 1] - k < 0 ) {
        return 0
    }else{
        return Math.abs(height[height.length - 1] - k)
    }
}