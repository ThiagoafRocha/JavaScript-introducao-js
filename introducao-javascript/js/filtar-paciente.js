var campoFiltro = document.querySelector("#filtrar-paciente");

campoFiltro.addEventListener("input",function(){

	var pacientes = document.querySelectorAll(".paciente");

	if (this.value.length > 0) {
		
		for (i=0; i < pacientes.length; i++) {
			var paciente = pacientes[i];
			var tdNome = paciente.querySelector(".info-nome");
			var nome = tdNome.textContent;
			var expressao = new RegExp(this.value, "i")

			if (expressao.test(nome)) {
				console.log("cheguei");
				paciente.classList.remove("invisivel");
			} else{
				paciente.classList.add("invisivel");
			}		
		}
	} else{

		for (var i = 0; i < pacientes.length; i++) {
			var paciente = pacientes[i];
			paciente.classList.remove("invisivel");
		}
	}

	
	/*pacientes.forEach(function(paciente){
		var tdNome = paciente.querySelector(".info-nome");
		var nome = tdNome.textContent;

		if (nome != this.value) {	
			paciente.classList.add("invisivel");
		} else{
			paciente.classList.remove("invisivel");
		}

	});*/
});

