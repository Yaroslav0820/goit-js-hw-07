const nameImput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameImput.addEventListener("input", (event) => {
    const whitespaceCleaning = event.target.value.trim();
    nameOutput.textContent = whitespaceCleaning === "" ? "Anonymous" : whitespaceCleaning
})