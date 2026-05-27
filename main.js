const constraints = {
  firstName: {
    pattern: "^[a-zA-Z]{2,}$",
    hint: "Alphabets only and must have at least 2 letters: e.g. John",
  },
  lastName: {
    pattern: "^[a-zA-Z]{1,}$",
    hint: "Alphabets only and must have at least 2 letters: e.g. Doe",
  },
  email: {
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    hint: "Email must include a username, @ symbol, and domain (e.g. user@gmail.com)",
  },
  password: {
    pattern:
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%#*?&])[A-Za-z\\d@$!%#*?&]{8,}$",
    hint: "Use at least 8 characters, including a mix of uppercase and lowercase letters, numbers, and symbols (like @, $, !, %, #, *, ? or &)",
  },
  postalCodes: {
    ch: {
      pattern: "^(CH-)?\\d{4}$",
      hint: "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
    },
    fr: {
      pattern: "^(F-)?\\d{5}$",
      hint: "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
    },
    de: {
      pattern: "^(D-)?\\d{5}$",
      hint: "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
    },
    nl: {
      pattern: "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      hint: "Dutch postal codes must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    },
  },
};

// DOM Elements
const formElement = document.querySelector("form");
const firstNameInput = document.getElementById("first-name");
const firstNameError = document.getElementById("first-name-error");
const lastNameInput = document.getElementById("last-name");
const lastNameError = document.getElementById("last-name-error");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const contrySelect = document.getElementById("country");
const countryError = document.getElementById("country-error");
const postalCodeInput = document.getElementById("postal-code");
const postalCodeError = document.getElementById("postal-code-error");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const confirmationInput = document.getElementById("confirmation");
const confirmationError = document.getElementById("confirmation-error");
const submitButton = document.querySelector("button[type=submit]");

// Functions and Callbacks
function validateInput(e, constraint) {
  const pattern = new RegExp(constraint.pattern);

  if (pattern.test(e.target.value)) {
    e.target.setCustomValidity("");
    e.target.nextElementSibling.textContent = "";
  } else {
    e.target.setCustomValidity(constraint.hint);
    e.target.nextElementSibling.textContent = constraint.hint;
  }
}

function validatePasswordConfirmation(e) {
  const hint = "Passwords do not match";
  console.log(e.target.value, passwordInput.value);

  if (e.target.value === passwordInput.value) {
    e.target.setCustomValidity("");
    e.target.nextElementSibling.textContent = "";
  } else {
    e.target.setCustomValidity(hint);
    e.target.nextElementSibling.textContent = hint;
  }
}

// Event Listeners:
firstNameInput.addEventListener("input", (e) => {
  validateInput(e, constraints.firstName);
});

lastNameInput.addEventListener("input", (e) => {
  validateInput(e, constraints.lastName);
});

emailInput.addEventListener("input", (e) => {
  validateInput(e, constraints.email);
});

passwordInput.addEventListener("input", (e) => {
  validateInput(e, constraints.password);
});

confirmationInput.addEventListener("input", (e) => {
  validatePasswordConfirmation(e);
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
});
