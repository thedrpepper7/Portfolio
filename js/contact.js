const submit = document.querySelector('#submitcontact');

submit.addEventListener('click', ()=> {
    const firstName = document.querySelector('#firstname');
    const lastName = document.querySelector('#lastname');
    const emailAddress = document.querySelector('#emailaddress');
    const message = document.querySelector('#message');
    if (firstName.value === '') {
        firstName.className = "noName";
        firstName.placeholder = "Required First Name*";
    }  else firstName.className = '';
    
    if (lastName.value === '') {
        lastName.className = "noName";
        lastName.placeholder = "Required Last Name*"
    } else lastName.className = '';

    if (emailAddress.value === '') {
        emailAddress.className = "noName";
        emailAddress.placeholder = "Required Email Address*"
    } else emailAddress.className = '';

    if (message.value === ''){
        message.className = "noName";
        message.placeholder = "Required Message*"
    } else message.className = '';
})

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


