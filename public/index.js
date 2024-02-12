const username = document.getElementById("username");
const email = document.getElementById("email");
const dob = document.getElementById("dob");
const submit = document.getElementById("actionButton");

username.oninput = function () {
    if (username.validity.valueMissing){
        username.setCustomValidity("Please enter your username");
    } else if (username.validity.patternMismatch){
        username.setCustomValidity("Please enter a username that starts with a letter");
    } else {
        username.setCustomValidity("");
    }
}

email.oninput = function () {
    if (email.validity.valueMissing) {
        email.setCustomValidity("Please enter your email address");
    } else if (email.validity.typeMismatch || email.validity.patternMismatch) {
        email.setCustomValidity("Please enter a valid email address");
    } else {
        email.setCustomValidity("")
    }
}

dob.oninput = function () {
    if (dob.validity.valueMissing) {
        dob.setCustomValidity("Please enter your date of birth");
    } else if (dob.validity.rangeUnderflow || dob.validity.rangeOverflow) {
        dob.setCustomValidity("Please enter a date between 1900-01-01 and 2024-12-31")
    } else {
        dob.setCustomValidity("");
    }
}

// submit.onclick = function (event) {
//     event.preventDefault();

//     if (!username.checkValidity() || !email.checkValidity() || !dob.checkValidity()) {
//         username.reportValidity();
//         email.reportValidity();
//         dob.reportValidity();
//     } else {
//         fetch("/add-birthday", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ username, email, dob }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log("success:", data);

//             const successMessage = document.getElementById("successMessage");
//             successMessage.textContent = "Hurray! Your Birthday successfully added";
//             successMessage.style.color = "green";
//             successMessage.style.display = "block";

//             document.getElementById("birthdayForm").reset();
//         })
//         .catch((error) => {
//             console.log("Error:", error);

//             const errorMessage = document.getElementById("errorMessage");
//             errorMessage.textContent = "Oops! Error adding birthday encountered. Please try again.";
//             errorMessage.style.color = "red";
//             errorMessage.style.display = "block"
//         })
//     }
// }

document
  .getElementById("birthdayForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // if (!username.checkValidity() || !email.checkValidity() || !dob.checkValidity()) {
    //   username.reportValidity();
    //   email.reportValidity();
    //   dob.reportValidity();
    //   return; 
    // }

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;

    fetch("/add-birthday", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, dob }),
    })
      .then((response) => response.json())
      .then((data) => {
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
        errorMessage.textContent =
          "Oops! Error adding birthday. Please try again.";
        errorMessage.style.color = "red";
        errorMessage.style.display = "block";
      });
  });
