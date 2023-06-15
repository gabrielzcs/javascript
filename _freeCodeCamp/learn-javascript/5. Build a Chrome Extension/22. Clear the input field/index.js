let myLeads = [];
let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  if (inputEl.value === "") {
    window.alert("Insira um item");
  } else {
    myLeads.push(inputEl.value);
    // Clear out the input field
    inputEl.value = "";
    renderLeads();
  }
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
  }
  ulEl.innerHTML = listItems;
}
