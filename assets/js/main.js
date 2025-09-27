const form = document.querySelector('form#greeterForm')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const greeterName = e.target[0].value

    window.location.href = `/Festival-Greetings-App/greeting.html?name=${greeterName}`

    console.log("Form Successfully Submitted");
    
})