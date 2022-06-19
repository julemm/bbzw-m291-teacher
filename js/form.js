const submit = document.getElementById("submit")
const email = document.getElementById("email")
const username = document.getElementById("username")
submit.disabled = true

const validate = () => {
    if (email.value == "") {
        submit.disabled = true
    } else {
        submit.disabled = false
    }
}

email.addEventListener("keyup", (event) => {
    validate()
})


submit.addEventListener("click", async (event) => {
    event.preventDefault()
    const result = await databaseClient.insertInto("userbank", ["email", "username"], [email.value, username.value])
    if (result.error) {
        alert("Datenbank Fehler: Ihr Benutzername oder ihre Email ist ungültig")
    }
    else {
        // Weiterleitung auf die Game Page  
        location.href = "./game.html"
    }

})