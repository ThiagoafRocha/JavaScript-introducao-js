var botaoAdc = document.querySelector("#adicionar-paciente");

botaoAdc.addEventListener("click", function (event){
	event.preventDefault();

	var form = document.querySelector("#form-adiciona")
	var paciente = obtemPacienteDoFormulario(form);

	var erros = validaPaciente(paciente)

	if (erros.length>0) {
		exibeMensagensdeErro(erros)
		return;
	}	

	adicionaNaTabela(paciente);

	form.reset();
	var mensagensApagar = document.querySelector("#mensagens-erro");
	mensagensApagar.innerHTML = "";

});

function adicionaNaTabela(paciente){
	var pacienteTr = criaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function exibeMensagensdeErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	})
}

function obtemPacienteDoFormulario(form){

	var paciente = {
		nome : form.nome.value,
		peso : form.peso.value,
		altura : form.altura.value,
		gordura : form.gordura.value,
		imc : calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function criaTr(paciente){

	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));	

	return pacienteTr;
}

function criaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){

	var erros = [];

	if (paciente.nome.length == 0) {
		erros.push("Nome é inválido!");
	}

	if(!validaPeso(paciente.peso) || paciente.peso.length == 0){
		erros.push("Peso é inválido!");
	}

	if (!validaAltura(paciente.altura) || paciente.altura.length == 0) {
		erros.push("Altura é inválida!");
	}

	if (paciente.peso.length == 0) {
		erros.push("Gordura é inválida!");
	}

	return erros;
}