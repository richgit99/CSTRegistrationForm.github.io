
const name_value = localStorage.getItem("name_value");
const email_value = localStorage.getItem("email_value");
const date = localStorage.getItem("date");
const select_id = localStorage.getItem("select_id");
const selected_button = localStorage.getItem("selected_button");
const input_address = localStorage.getItem("input_address");
const input_tel = localStorage.getItem("input_tel");


const pop_up = document.getElementById("pop_up");
const pop_up_btn = document.getElementById("pop_up_btn");
const student_name_in_popUP = document.getElementById("student_name_in_popUP");

student_name_in_popUP.append(name_value);



pop_up_btn.onclick = function(){
    pop_up.remove();
}


// variables of the data.js files , need to append the actual values to it
const result_name = document.getElementById('result_name');
const result_state = document.getElementById('result_state');
const result_gender = document.getElementById('result_gender');
const result_dob = document.getElementById('result_dob');
const result_email = document.getElementById('result_email');
const result_address = document.getElementById("result_address");
const result_tel = document.getElementById("result_tel");




result_name.innerText = name_value;
result_email.append(email_value);
result_gender.append(selected_button);
result_state.append(select_id);
result_dob.append(date);
result_address.append(input_address);
result_tel.append(input_tel);




