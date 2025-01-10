//OG CODE
//the js for country, state and cities start here
const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");
const countryValidation = document.getElementById("countryValidation");
const stateValidation = document.getElementById("stateValidation");
const cityValidation = document.getElementById("cityValidation");
const form = document.getElementById("form");

const stateOptions = {
  India: ["Maharashtra", "Karnataka", "Delhi", "Punjab"],
  USA: ["California", "New York", "Texas", "Ohio"],
  SouthAfrica: ["Free State", "Gauteng", "KwaZulu-Natal", "Limpopo"],
  Canada: ["Ontario", "Manitoba", "Alberta", "New Brunswick"]
};

const cityOptions = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Aurangabad"],
  Karnataka: ["Bangalore", "Mysore", "Mangaluru","Hubballi"],
  Delhi: ["New Delhi", "Karala", "Bhalswa", "Chilla",],
  Punjab: ["Amritsar","Kapurthala","Bathinda","jalandhar"],

  California: ["Los Angeles", "San Francisco", "San Diego" , "San Jose"],
  "New York": ["New York City", "Hempstead", "Brookhaven", "Middletown"],
  Texas: ["Houston", "Austin", "Dallas","San Antonio"],
  Ohio: ["Columbus","Cleveland","Cincinnati","Dayton"],

  "Free State": ["Winburg","Senekal","Brandfort","Clocolan"],
  Gauteng: ["Johannesburg", "Pretoria", "Heidelberg","Vereeniging"],
  "KwaZulu-Natal": ["Durban","KwaDukuza","Umkomaas","Adams Mission"],
  Limpopo: ["Polokwane","Mokopane","Phalaborwa","Louis Trichardt"],

  Ontario: ["Toronto","Hamilton","Windsor","Kingston"],
  Manitoba: ["Winnipeg","Dauphin","Brandon","Steinbach"],
  Alberta: ["Edmonton","Calgary","Lethbridge","Airdrie"],
  "New Brunswick": ["Moncton","Bathurt","Campbellton","Saint John"]
};

function updateStates() {
  const selectedCountry = countrySelect.value;
  stateSelect.innerHTML = "<option value=''>Select State</option>";
  citySelect.innerHTML = "<option value=''>Select City</option>";
  if (selectedCountry) {
    const states = stateOptions[selectedCountry];
    states.forEach(state => {
      const option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    });
  }
}

function updateCities() {
  const selectedState = stateSelect.value;
  citySelect.innerHTML = "<option value=''>Select City</option>";
  if (selectedState) {
    const cities = cityOptions[selectedState];
    cities.forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
}
//the js for country, state and cities end here

//VALIDATION
//Validating the First Name and Last Name fields that there are only letters in it
function validateNameFields() {
  const firstNameInput = document.querySelector('#fname input');
  const lastNameInput = document.querySelector('#lname input');
  const lettersOnlyPattern = /^[A-Za-z]+$/;

  if (!firstNameInput.value.match(lettersOnlyPattern)) {
      alert("First name must contain letters only.");
      return false;
  }

  if (!lastNameInput.value.match(lettersOnlyPattern)) {
      alert("Last name must contain letters only.");
      return false;
  }

  return true;
}

document.querySelector('#form').addEventListener('submit', function(event) {
  if (!validateNameFields()) {
      event.preventDefault(); // Prevent form submission
  }
});

//Validating Email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.querySelector('#form').addEventListener('submit', function(event) {
  if (!validateEmail()) {
      event.preventDefault(); // Prevent form submission
  }
});

//Validating Phone Number

function validatePhone(phonenumber) {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phonenumber);
}

document.querySelector('#form').addEventListener('submit', function(event) {
  if (!validatePhone()) {
      event.preventDefault(); // Prevent form submission
  }
});

//Validating User ID Field
function validateUserID(userID) {
  const userIDRegex = /^[a-zA-Z0-9]+$/;
  return userIDRegex.test(userID);
}

document.querySelector('#form').addEventListener('submit', function(event) {
  if (!validateUserID()) {
      event.preventDefault(); // Prevent form submission
  }
});

//Validating Reference Code Field
function validateRefCode(refCode) {
  const refCodeRegex = /^[a-zA-Z0-9]+$/;
  return refCodeRegex.test(refCode);
}

document.querySelector('#form').addEventListener('submit', function(event) {
  if (!validateRefCode()) {
      event.preventDefault(); // Prevent form submission
  }
});


//the js that caputers the input fields and displays them on the aside
document.getElementById("continue").addEventListener("click", function() {
  // Get input values
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("emailID").value;
  let userID = document.getElementById("userID").value;
  let country = document.getElementById("country").value;
  let state = document.getElementById("state").value;
  let city = document.getElementById("city").value;
  let phonenumber = document.getElementById("pnumberID").value;
  let refCode = document.getElementById("refCodeID").value;

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Display details in the aside
  let displayDetailsElement = document.getElementById("DisplayDetails");
  displayDetailsElement.innerHTML = `
    <h2>User Details</h2>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>User ID:</strong> ${userID}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>State:</strong> ${state}</p>
    <p><strong>City:</strong> ${city}</p>
    <p><strong>Phone Number:</strong> ${phonenumber}</p>
    <p><strong>Referral Code:</strong> ${refCode}</p>
  `;
  document.getElementById("DisplayDetails").style.border = "2px solid";  
  document.getElementById("DisplayDetails").style.padding = "10px";
  document.getElementById("DisplayDetails").style.fontFamily = "Arial";

});





//Function that Clears all the fields
document.getElementById("reset").addEventListener("click", function() {
  const form = document.querySelector("form");
  form.reset();
});
