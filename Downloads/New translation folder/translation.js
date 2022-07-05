const optionInput = document.querySelector(".option-input");
const optionOutput = document.querySelector(".option-output");
const translateBtn = document.querySelector(".translate-to");
//const  SERVER_URL ="https://google-translate1.p.rapidapi.com/language/translate/v2/detect";
//const API_KEY = "5d05a8630bmsh65bf6fef0b0db23p1b7f5bjsna37a2e80b55b";

const encodedParams = new URLSearchParams();
encodedParams.append("q", "English is hard, but detectably so");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '5d05a8630bmsh65bf6fef0b0db23p1b7f5bjsna37a2e80b55b',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: encodedParams
};

// function translatedText(input){
// 	return options + input
// }


// function errorHandler(error){
// 	console.error(alert('an error has occured', 'error'))
// }

// async function clickHandler(){
// 	let inputValue = optionInput.value
// 	let response = await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
// 	.then(response.json())
// 	.then(response =>{
// 		let translatedTextInput = json.options
// 		optionOutput.innerHTML = translatedTextInput
// 	})
// .catch(errorHandler)
// }
// translateBtn.addEventListener('click', clickHandler)

 translatedTextInput = () =>{
return options + value
}
async function clickHandler(){
let response = await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
let data = await response.json()

.then(data=>{
	let translatedText = options.data
	optionInput.translatedText = data.innerText
	optionOutput.innerHTML = translatedText.json()
})

.catch(alert('an error has occured', 'error'))
}

translateBtn.addEventListener('click', clickHandler)


