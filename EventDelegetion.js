let ul = document.getElementById('myList') ;
let button = document.getElementById('addItem');


ul.addEventListener('click',function (event) {
    if (event.target && event.target.matches('li') ) {
        console.log(event.target.id);
    }
})

button.addEventListener('click', function (){
    let li = document.createElement('li');
    let length = ul.childElementCount + 1;
    li.setAttribute('id', `item${length}`)
    li.textContent = `item${length}`
    ul.appendChild(li)
})