function verify() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("nasc");
  var res = document.getElementById("res");

  if (fano.value.length <= 3 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - fano.value;
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade > 0 && idade < 13) {
        //crianca
        img.setAttribute("src", "images/h-crianca.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "images/h-jovem.jpg");
      } else if (idade < 60) {
        //adulto
        img.setAttribute("src", "images/h-adulto.jpg");
      } else {
        //idoso
        img.setAttribute("src", "images/h-idoso.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if(idade > 0 && idade < 13){
        //crianca
        img.setAttribute('src', 'images/m-crianca.jpg')
      }else if(idade < 21){
        img.setAttribute('src', 'images/m-jovem.jpg')
      }else if(idade < 60){
        img.setAttribute('src', 'images/m-adulto.jpg')
      }else{
        img.setAttribute('src', 'images/m-idoso.jpg')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
