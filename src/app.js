import './scss/style.scss';

// COUNTER 

const counterNumber = document.querySelector(".counter-number");
let counter = 23;
const counterInteval = setInterval(() => {
  counter--
  counterNumber.innerText = counter;
  if (counter === 0) {
    clearInterval(counterInteval);
  }
}, 1000);


// FORM TOOLTIPS

const tooltips = document.querySelectorAll(".tooltip-icon");

const showTooltip = (e) => {
    if(e.target.classList.contains("tooltip-icon")) {
        e.target.nextElementSibling.classList.remove('hidden')
    } else {
        e.target.classList.remove('hidden')
    }
}

const hideTooltip = (e) => {
    if(e.target.classList.contains("tooltip-icon")) {
        e.target.nextElementSibling.classList.add('hidden')
    } else {
        e.target.classList.add('hidden')
    }
}

tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseover', (e) => showTooltip(e));
    tooltip.addEventListener('mouseleave', (e) => hideTooltip(e));
    tooltip.nextElementSibling.addEventListener('mouseover', (e) => showTooltip(e));
    tooltip.nextElementSibling.addEventListener('mouseleave', (e) => hideTooltip(e));
})


// FORM VALIDATION
const form = document.querySelector('form');
const email = document.querySelector('#inputEmail');
const phone = document.querySelector('#inputPhone');
const name = document.querySelector('#inputName');
const address = document.querySelector('#inputAddress');


const emailValidationInfo = document.querySelector('#email-validation');
const phoneValidationInfo = document.querySelector('#phone-validation');
const nameValidationInfo = document.querySelector('#name-validation');
const addressValidationInfo = document.querySelector('#address-validation');


const emailIsValid = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

const phoneIsValid = (phone) => {
    return /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/.test(phone);
}

const checkValidation = () => {
    !emailIsValid(email.value) ? emailValidationInfo.style.display = "block" : emailValidationInfo.style.display = "none";
    !phoneIsValid(phone.value) ? phoneValidationInfo.style.display = "block" :  phoneValidationInfo.style.display = "none";
    name.value.length === 0 ? nameValidationInfo.style.display = "block" : nameValidationInfo.style.display = "none" ;
    address.value.length === 0 ? addressValidationInfo.style.display = "block" : addressValidationInfo.style.display = "none";
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkValidation();
})