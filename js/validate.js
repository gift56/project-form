const submits = document.querySelector("#my_form");
const nameInput = document.querySelector("#name");
const lastInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const errors = document.querySelector("#msg");

submits.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === "" || lastInput.value === "" || emailInput === "") {
        errors.classList.add("err");
        errors.innerHTML = "Please enter all fields";

        setTimeout(() => errors.remove(), 3000);

    } else {
        errors.classList.add("suc");
        errors.innerHTML = "Success";
        console.log("Success");

        setTimeout(() => errors.remove(), 2000);
    }
}

