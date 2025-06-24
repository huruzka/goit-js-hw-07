const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
    const trimmedText = textInput.value.trim(); 
   
    output.textContent = trimmedText === "" ? "Anonymous" : trimmedText;
  
});