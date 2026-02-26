const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


const rememberCheckbox = document.getElementById("remember");
const usernameInput = document.querySelector(".input-div.one .input");
const loginForm = document.querySelector("form");

window.addEventListener("DOMContentLoaded", function(){
	const saved = localStorage.getItem("rememberedUsername");
	if(saved){
		usernameInput.value = saved;
		usernameInput.parentNode.parentNode.classList.add("focus");
		rememberCheckbox.checked = true;
	}
});

loginForm.addEventListener("submit", function(){
	if(rememberCheckbox.checked){
		localStorage.setItem("rememberedUsername", usernameInput.value);
	} else {
		localStorage.removeItem("rememberedUsername");
	}
});
