
const container = document.getElementById("container")

container.innerHTML = "<button>Buy!</button><br>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

container.addEventListener('click', function(){
    container.innerHTML += "<p>Thanks for buying</p>" 
})