const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function(event){
    event.preventDefault();

    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();

    if (email === "" || password === "") {
        alert("All form fields must be filled in");
        return;
    }

    const thesForm = {
        email: email,
        password: password
    };
    console.log(thesForm);

    event.target.reset();
    
})