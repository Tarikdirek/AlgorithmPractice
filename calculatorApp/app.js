let input = document.getElementById('cal-inp');

input.addEventListener('input',(e) => {
    
    let value = Number(e.target.value)
    console.log(value);
})