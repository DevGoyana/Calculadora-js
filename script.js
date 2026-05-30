function pegarValores(){
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;
if (n1 === "" || n2 === "" ) {
alert("Preencha os dois valores");
return null;
}
return [Number(n1),Number(n2)];
}
function calcular(operacao){
  let valores = pegarValores();
  if (!valores) return;

  let [n1, n2] = valores;
  let resultado;

  if (operacao === "soma") resultado = n1 + n2;
  else if (operacao === "sub") resultado = n1 - n2;
  else if (operacao === "mult") resultado = n1 * n2;
  else if (operacao === "div") {
   if (n2 === 0) {
      alert("Não pode dividir por zero");
      return;
    }
    resultado = n1 / n2;
  }

  document.getElementById("resultado").textContent = resultado;
  
  document.getElementById("num1").value = ""
  document.getElementById("num2").value = ""
  document.getElementById("num1").focus();
}