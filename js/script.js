document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" &&
   document.getElementById("data").value != "" &&
   document.getElementById("mesa").value != "" &&
   document.getElementById ("telefone").value != ""){
    alert("Prontinho! sua RESERVA está feita.")
  }else{
    alert("Favor preencher todos os campos Nome, Data, Mesa e Telefone")
  }
}