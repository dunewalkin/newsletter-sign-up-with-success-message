const primaryButton = document.querySelector (".primary-button");
const secondaryButton = document.querySelector (".secondary-button");
const button = document.getElementById ('btn');

const mainPage = document.querySelector (".main-container");
const messagePage = document.querySelector (".message-container");

const mailAddress = document.getElementById ('email');
const submittedEmail = document.getElementById('submitted-email');
const errMessage = document.querySelector('.error-message')
const form = document.getElementById('subscribe-form')


function validation (str) {
   const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
   return reg.test(str);
}

 function switchPages() {
   mainPage.classList.toggle("hide");
   messagePage.classList.toggle("hide");
 }

 function updateSuccessMessage() {
   submittedEmail.innerHTML = email.value;
 };

 function showError () {
   errMessage.classList.remove("hide");
   mailAddress.classList.add("error");
 }

 function hideError () {
   errMessage.classList.add("hide");
   mailAddress.classList.remove("error");
 }

 function resetForm () {
   document.getElementById("subscribe-form").reset();
}


form.addEventListener('submit', (e)  => {  
   e.preventDefault();

   const valid = validation(email.value);
   if (!valid) {
      showError();
    }
   
    if (valid) {
      updateSuccessMessage();
      switchPages();
    }
});


secondaryButton.addEventListener('click', ()  => {
   hideError();
   resetForm();
   switchPages();
});

