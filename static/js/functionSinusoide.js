let ampiezzaInput = document.querySelector("[name=ampiezza]")

		ampiezzaInput.addEventListener("input", function(e){
			console.log(`ampiezza changed -> ${ampiezzaInput.value}`)
			ampiezza = parseInt(ampiezzaInput.value)
		})			


let frequenzaInput = document.querySelector("[name=frequenza]")

		frequenzaInput.addEventListener("input", function(e){
			console.log(`frequency changed -> ${frequenzaInput.value}`)
			frequenza = parseFloat(frequenzaInput.value)
		})


let faseInput = document.querySelector("[name=fase]")

		faseInput.addEventListener("input", function(e){
			console.log(`fase changed -> ${faseInput.value}`)
			fase = parseInt(faseInput.value)
		})
