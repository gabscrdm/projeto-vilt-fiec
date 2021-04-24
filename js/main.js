function validar(){
	var nome = document.getElementById('nome');
	var cpf = document.getElementById('cpf');
	var data = document.getElementById('data');
	var sexo = document.getElementById('sexo');
	var email = document.getElementById('email');
    var celular = document.getElementById('celular');
    var nivel = document.getElementById('nivel');
    var media = document.getElementById('media');

if (nome.value == "") {
    alert("Nome não informado");
}
if (cpf.value == "") {
    alert("CPF não informado");
}
if (data.value == "") {
    alert("Data não informado");
}
if (email.value == "") {
    alert("Email não informada");
}
if (celular.value == "") {
    alert("Celular não informado");
}
if (nivel.value == "") {
    alert("Nivel não informado");
}
if (media.value == "") {
    alert("Media não informado");
    return;
}
else{
    alert("Formulário enviado!");
}
}