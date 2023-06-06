function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("img");

  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes()

  msg.innerHTML = `Agora sao ${hora}:${min}`;

  if (hora >= 6 && hora < 12) {
    img1.src = "images/manha.png";
    document.body.style.background = "#eab58d";
  } else if (hora >= 12 && hora < 18) {
    img1.src = "images/tarde.png";
    document.body.style.background = '#637a4d'
  } else {
    img1.src = "images/noite.png";
    document.body.style.background = '#182022'
  }
}
