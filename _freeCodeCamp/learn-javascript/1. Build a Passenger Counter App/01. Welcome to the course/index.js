// javascript
let count = 0;
let people = document.getElementById("count-l");

function increment() {
  count = count + 1;
  people.textContent = `${count}`;
}

let log = 0;
let prev = document.getElementById("prev");

function save() {
  log = count;
  prev.textContent += ` ${log}, `;
  people.textContent = "0";
  count = 0;
}
