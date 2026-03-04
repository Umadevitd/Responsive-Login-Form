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

const rememberMe = document.getElementById("rememberMe");
const usernameInput = document.querySelector(".input-div.one .input");
const form = document.querySelector("form");

const savedUsername = localStorage.getItem("rememberedUsername");
if(savedUsername){
	usernameInput.value = savedUsername;
	usernameInput.parentNode.parentNode.classList.add("focus");
	rememberMe.checked = true;
}

form.addEventListener("submit", function(){
	if(rememberMe.checked){
		localStorage.setItem("rememberedUsername", usernameInput.value);
	} else {
		localStorage.removeItem("rememberedUsername");
	}
});
