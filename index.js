
let selected_button;
const name_value = document.getElementById("name_value");
const email_value = document.getElementById('email_value');
const date = document.getElementById("input_date");
const select_id = document.getElementById("select_id");
const bu = document.getElementById('bu');
const full_form = document.getElementById('full_form');
const radios = document.getElementsByName('exampleRadios');
const input_address = document.getElementById("input_address");
const input_tel = document.getElementById("input_tel");
const progress_block = document.getElementById("progress_block");
const actual_progress_bar = document.getElementById("actual_progress_bar");


name_value.addEventListener('input', () => {
    const nameRegex = /^[a-zA-Z\s]+$/; 
    if (!nameRegex.test(name_value.value)) {
      name_value.setCustomValidity('Please senter a valid name');
      name_value.style.border = '1px solid red';
    } else {
      name_value.setCustomValidity('');
      name_value.style.border = '1px solid black';

    }
  });
  



const phoneRegex = /^\d{10}$/; 
    
input_tel.addEventListener('input', () => {
  const phoneNumber = input_tel.value;
  
  if (!phoneRegex.test(phoneNumber)) {
    input_tel.setCustomValidity('Please enter a valid 10-digit phone number without The country code');
    input_tel.style.border = '1px solid red';
  } else {
    input_tel.setCustomValidity('');
    input_tel.style.border = '1px solid black';
  }
});


select_id.addEventListener('change', () => {
    if (select_id.value === 'Select state') {
      select_id.setCustomValidity('Please select a state');
      select_id.style.border = '1px solid red';
    } else {
      select_id.setCustomValidity('');
      select_id.style.border = '1px solid black';
    }
  });
  



full_form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selected_button = radios[i].value;
            
            break;
        }

    }



    progress_block.style.display = 'block';
    actual_progress_bar.classList.add("progress_bar");
    bu.remove();

    localStorage.setItem("name_value", name_value.value);
    localStorage.setItem("email_value", email_value.value);
    localStorage.setItem("date", date.value);
    localStorage.setItem("select_id", select_id.value);
    localStorage.setItem("selected_button", selected_button);
    localStorage.setItem("input_address", input_address.value);
    localStorage.setItem("input_tel", input_tel.value);


   
    
    setTimeout(() => {
        window.location = "data.html";
        window.open("data.html");

    }, 5000);
});












































