let input = document.getElementById("searchInput");
 let insertResults = document.getElementById("results");

input.addEventListener("input", async function () {
  let value = input.value;
  insertResults.textContent = "Loading...";
  insertResults = debounce(await searchAPI(value));
});

async function searchAPI(query) {
  try{let response = await fetch(`https://api.example.com/search?q=${query}`);
  let data = await response.json();
  return data;}catch(error){
    return error.message;
  }
}

function debounce(fn, delay = 500) {
  let timeout;

  return ((...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn(...args);
      });
    },
    delay
  );
}
