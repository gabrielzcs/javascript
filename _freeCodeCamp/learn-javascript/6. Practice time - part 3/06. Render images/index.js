// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const container = document.getElementById("container");

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

function render() {
    let imgsDOM = ""
  for (i = 0; i < imgs.length; i++) {
    imgsDOM += `<img src='${imgs[i]}' class='team-img' alt="Employee in the company"> `;
  }
  container.innerHTML = imgsDOM
}

render();
