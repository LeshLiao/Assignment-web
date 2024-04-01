let companyDiv = document.getElementById("radio_company");
let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPhoneNumber = document.getElementById("phone_number");
let inputCompanyName = document.getElementById("input_company");
let inputContent = document.getElementById("content");
let companyCon = document.getElementsByClassName('company_container')[0];

companyCon.style.display = 'none';

function checkRadio() {

  if (document.getElementById("radio_company").checked) {
    console.log('company checked')

    companyCon.style.display = 'block';
  } else {
    companyCon.style.display = 'none';
  }
}

function submit() {
  let submit_msg = checkAllValue();
  if (submit_msg == '') {
    console.log('succeed! return json object')
    let radioValue = document.querySelector('input[name="category"]:checked').value;
    let jsonObj = {
      'name': inputName.value,
      'email': inputEmail.value,
      'phone': inputPhoneNumber.value,
      'category': radioValue,
      'company name': inputCompanyName.value,
      'message': inputContent.value
    }
    console.log(jsonObj);
    document.querySelector('#submit_msg').innerHTML = 'Submit Successfully!';
    document.querySelector('#submit_msg').style.color = 'green';
  } else {
    document.querySelector('#submit_msg').innerHTML = submit_msg;
    document.querySelector('#submit_msg').style.color = 'red';
  }
}

function checkAllValue (){
  let errorMsg = '';

  if (inputName.value == '') {
    errorMsg += 'Name is empty!<br>';
  }

  if (inputEmail.value == '' || !inputEmail.value.includes("@") || !inputEmail.value.includes(".com")) {
    errorMsg += 'Email is not valid: Email address has an "@" and a ".com"<br>';
  }

  // if (!inputPhoneNumber.value.match(/^\d{10}$/)) {
  if (inputPhoneNumber.value.length < 10) {
    errorMsg += 'PhoneNumber is not valid: Phone number has at least 10 numbers<br>';
  }

  let radioValue = document.querySelector('input[name="category"]:checked').value;
  if (radioValue == 1 && inputCompanyName.value == '') {
    errorMsg += 'Company Name is empty!<br>';
  }

  if (inputContent.value == '') {
    errorMsg += 'Content is empty!<br>';
  }

  return errorMsg;
}

