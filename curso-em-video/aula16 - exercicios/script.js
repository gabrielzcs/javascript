let num = document.getElementById("num");
let res = document.getElementById("res");
let res1 = document.getElementById("res1");
let val = [];

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function analisar() {
  let n = Number(num.value);
  if (isNumber(num.value) && !inLista(num.value, val)) {
    val.push(n);
    res.innerHTML += `Valor [${n}] adicionado <br>`;
    res1.innerHTML = "";
  } else {
    window.alert("Valor invalido ou ja encontrado na lista");
  }
  num.value = "";
  num.focus();
}

function fim() {
  if (val.length == 0) {
    window.alert("Adicione Valores Antes de Comecar");
  } else {
    let maior = val[0];
    let menor = val[0];
    let soma = 0;
    let media = 0;
    for (let pos in val) {
      soma += val[pos];
      media *= val[pos] / pos;
      if (val[pos] > maior) {
        maior = val[pos];
      }
      if (val[pos] < menor) {
        menor = val[pos];
      }
    }
    media = soma / val.length;
    res1.innerHTML = `Ao todo temos ${val.length} numeros cadastrados <br>`;
    res1.innerHTML += `O Maior valor informado foi: ${maior}<br> `;
    res1.innerHTML += `O Menor valor informado foi: ${menor}<br>`;
    res1.innerHTML += `Somando todos os valores temos: ${soma}<br>`;
    res1.innerHTML += `A media dos valores digitados e: ${media}`;
  }
}
