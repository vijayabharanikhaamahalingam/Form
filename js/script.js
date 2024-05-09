let form=document.getElementById("form");

let table=document.getElementById('data');
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  submit();
})
const submit=()=>{
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let gender = null;
    document.getElementsByName("gender").forEach(a=>{
      if(a.checked){
        gender = a.labels[0].innerText;
      }
    });
    let choiceOfFood = document.getElementById("choiceOfFood").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let pincode = document.getElementById("pincode").value;
    let address = document.getElementById("address").value;
  
      if (firstName && lastName && email && gender && choiceOfFood && state && country && pincode && address ) {
        const tableElement = document.getElementById('table');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const firstNameEle = document.createElement('td');
        const lastNameEle = document.createElement('td');
        const emailEle = document.createElement('td');
        const addressEle = document.createElement('td');
        const pincodeEle = document.createElement('td');
        const genderEle = document.createElement('td');
        const choiceOfFoodEle = document.createElement('td');
        const stateEle = document.createElement('td');
        const countryEle = document.createElement('td');
        firstNameEle.innerHTML = firstName;
        lastNameEle.innerHTML = lastName;
        emailEle.innerHTML = email;
        genderEle.innerHTML = gender;
        addressEle.innerHTML = address;
        choiceOfFoodEle.innerHTML = choiceOfFood;
        stateEle.innerHTML = state;
        countryEle.innerHTML = country;
        pincodeEle.innerHTML = pincode;
        trElement.appendChild(firstNameEle);
        trElement.appendChild(lastNameEle);
        trElement.appendChild(emailEle);
        trElement.appendChild(addressEle);
        trElement.appendChild(pincodeEle);
        trElement.appendChild(genderEle);
        trElement.appendChild(choiceOfFoodEle);
        trElement.appendChild(stateEle);
        trElement.appendChild(countryEle);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
    }
    form.reset(); 
  }