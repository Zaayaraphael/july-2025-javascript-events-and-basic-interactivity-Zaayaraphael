
// Part 1: to handle event when a button is clicked

document.getElementById("greetBtn").addEventListener("click", () => {
  document.getElementById("greetMsg").textContent = "Hello 👋! You clicked the button.";
});


// Part 2: Interactive Elements

// change to dark/light mode when the toogle button is clicked
const body = document.body;
document.getElementById("toggleMode").addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Counter app, count increased by 1 when increased button is clicked 
// decreased by 1 when descrease button is clicked and Reset button reset to zero

let count = 0;
const counterEl = document.getElementById("counter");

document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterEl.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterEl.textContent = count;
});

// Collapsible FAQ
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqAnswer.style.display = "none"; // start hidden
faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display = faqAnswer.style.display === "none" ? "block" : "none";
});


// Part 3: Form Validation

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page refresh

  // to trim the user input and remove the bar spaces
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("formMsg");

  let errors = [];

  // to check if the username is less than 3 characters
  if (name.length < 3) {
    errors.push("Name must be at least 3 characters.");
  }


  // to validate the email pattern
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Invalid email format.");
  }


  // to check the email length
  
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  if (errors.length > 0) {
    msg.style.color = "red";
    msg.innerHTML = errors.join("<br>");
  } else {
    msg.style.color = "green";
    msg.textContent = "Form submitted successfully ✅";
  }
});
