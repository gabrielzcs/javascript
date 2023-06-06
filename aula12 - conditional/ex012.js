var horario = new Date();
var hora = horario.getHours();
console.log(`Agora sao exatamente ${hora} horas`);
if (hora < 12 && hora >= 6) {
  console.log(`Bom dia`);
} else if (hora <= 18) {
  console.log(`Boa tarde`);
} else {
  console.log(`Boa noite`);
}
