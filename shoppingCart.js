
let parentDiv = document.getElementsByClassName('productList');
let total = document.getElementById('total')

parentDiv.addEventListener('click',function (event) {
    if (event.target && event.target.class === 'add-to-cart') {
            
        let productPrice = Number(event.target.closest('.product-card').dataset.price);
            
            let currentTotal = Number(total.textContent);
            currentTotal = total + productPrice;

            event.target.textContent = 'Sepette';
            event.target.setAttribute('disabled','true');
    }
})