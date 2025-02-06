function designerPdfViewer(h, word) {
    // Write your code here
    let maxHeight = 0 ;
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','p','v','w','x','y','z']
    let words = word.split('');
    words.forEach((x) => {
        if (h[letters.indexOf(x)]> maxHeight) {
            maxHeight = h[letters.indexOf(x)]
        }
    })

    return maxHeight * word.length

}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7],'zaba'))

