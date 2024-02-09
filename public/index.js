document.getElementById("birthdayForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;

    fetch("/add-birthday", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, email, dob}),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);

        const successMessage = document.getElementById("successMessage");
        successMessage.textContent = "Hurray! Your Birthday successfully added";
        successMessage.style.color = "green";
        successMessage.style.display = "block";

        document.getElementById("birthdayForm").reset();
    })
    .catch((error) => {
        console.log("Error:", error);

        const errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "Oops! Error adding birthday. Please try again.";
        errorMessage.style.color = "red";
        errorMessage.style.display = "block";
    })

})