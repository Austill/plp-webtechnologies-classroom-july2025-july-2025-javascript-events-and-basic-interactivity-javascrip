// --- Light/Dark Mode Toggle ---
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// --- Counter Feature ---
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});

// --- Collapsible FAQ ---
const faqToggle = document.querySelector(".faq-toggle");
const faqAnswer = document.querySelector(".faq-answer");
faqToggle.addEventListener("click", () => {
  faqAnswer.classList.toggle("hidden");
});

// --- Form Validation ---
const form = document.getElementById("registerForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop form from submitting

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error spans
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formMessage = document.getElementById("formMessage");

  let isValid = true;

  // Name validation
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Final feedback
  if (isValid) {
    formMessage.textContent = "✅ Registration successful!";
    form.reset();
  } else {
    formMessage.textContent = "";
  }
});
