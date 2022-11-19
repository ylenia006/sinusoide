let amplitudeInput = document.querySelector("[name=ampiezza]")

		amplitudeInput.addEventListener("input", function(e){
			console.log(`amplitude changed -> ${amplitudeInput.value}`)
			ampiezza = amplitudeInput.value
		})			


let frequencyInput = document.querySelector("[name=frequenza]")

		frequencyInput.addEventListener("input", function(e){
			console.log(`frequency changed -> ${frequencyInput.value}`)
			frequenza = frequencyInput.value
		})


let fase = document.querySelector("[name=fase]")

		fase.addEventListener("input", function(e){
			console.log(`fase changed -> ${fase.value}`)
			fase = fase.value
		})
