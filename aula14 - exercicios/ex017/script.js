function tab() {
  var n = document.getElementById("num");
  var res = document.getElementById("res");
  
  if (n.value.length == 0) {
    window.alert("DIGITE UM NUMERO");
  } else {
    var n = Number(num.value);
    res.innerHTML = "";
    for (var rep = 1; rep <= 10; rep++) {
      res.innerHTML += `${n} x ${rep} = ${n*rep} <br>`;
    }
  }
}