function contador() {
  var i = document.getElementById("inicio");
  var f = document.getElementById("fim");
  var p = document.getElementById("passo");

  var res = document.getElementById("res");

  if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
    res.innerHTML = `Impossivel Contar!!!`;
    window.alert("[ERRO] Nenhum valor digitado");
  } else {
    var i = Number(i.value);
    var f = Number(f.value);
    var p = Number(p.value);
    if (p <= 0) {
      window.alert("Passo invalido. Considerando Passo 1");
      p = 1;
    }
    if (i < f) {
      //Contagem crescente
      for (i; i <= f; i += p) {
        res.innerHTML += `${i} \u{1F449}`;
      }
    } else {
      //Contagem regressiva
      for (i; i >= f; i -= p) {
        res.innerHTML += `${i} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
