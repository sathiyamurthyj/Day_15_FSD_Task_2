let form = document.createElement("form");
form.setAttribute("name","dynamicForm");
form.setAttribute("id","form");
document.getElementById("formDiv").appendChild(form);

// labels
let l_firstname = document.createElement("label");
l_firstname.innerHTML = "First Name";
l_firstname.classList.add("form-label");
let l_lastname = document.createElement("label");
l_lastname.innerHTML = "Last Name";
l_lastname.classList.add("form-label");
let l_email = document.createElement("label");
l_email.innerHTML = "Email";
l_email.classList.add("form-label");
let l_address = document.createElement("label");
l_address.innerHTML = "Address";
l_address.classList.add("form-label");
let l_pincode = document.createElement("label");
l_pincode.innerHTML = "Pin Code";
l_pincode.classList.add("form-label");
let l_gender = document.createElement("label");
l_gender.innerHTML = "Gender";
l_gender.classList.add("form-label");
let l_choiceOfFood = document.createElement("label");
l_choiceOfFood.innerHTML = "Choice of Food";
l_choiceOfFood.classList.add("form-label");
let l_state = document.createElement("label");
l_state.innerHTML = "State";
l_state.classList.add("form-label");
let l_country = document.createElement("label");
l_country.innerHTML = "Country";
l_country.classList.add("form-label");
let l_male = document.createElement("label");
l_male.innerHTML = "Male";
l_male.classList.add("form-check-label");
let l_female = document.createElement("label");
l_female.innerHTML = "Female";
l_female.classList.add("form-check-label");
let l_veg = document.createElement("label");
l_veg.innerHTML = "Veg";
l_veg.classList.add("form-check-label");
let l_nonveg = document.createElement("label");
l_nonveg.innerHTML = "Non-Veg";
l_nonveg.classList.add("form-check-label");
let l_vegan = document.createElement("label");
l_vegan.innerHTML = "Vegan";
l_vegan.classList.add("form-check-label");
let l_paleo = document.createElement("label");
l_paleo.innerHTML = "Paleo";
l_paleo.classList.add("form-check-label");
let l_keto = document.createElement("label");
l_keto.innerHTML = "Keto";
l_keto.classList.add("form-check-label");

// label attributes
l_firstname.setAttribute("for","first-name");
l_lastname.setAttribute("for","last-name");
l_email.setAttribute("for","email");
l_address.setAttribute("for","address");
l_pincode.setAttribute("for","pincode");
// l_gender.setAttribute("for","gender");
// l_choiceOfFood.setAttribute("for","foodchoice");
l_state.setAttribute("for","state");
l_country.setAttribute("for","country");
l_male.setAttribute("for","male");
l_female.setAttribute("for","female");
l_veg.setAttribute("for","foodchoice1");
l_nonveg.setAttribute("for","foodchoice2");
l_vegan.setAttribute("for","foodchoice3");
l_paleo.setAttribute("for","foodchoice4");
l_keto.setAttribute("for","foodchoice5");

// input
let firstname = document.createElement("input");
firstname.setAttribute("type","text");
firstname.setAttribute("name","fname");
firstname.setAttribute("id","first-name");
firstname.setAttribute("placeholder","first name");
firstname.classList.add("form-control");

let lastname = document.createElement("input");
lastname.setAttribute("type","text");
lastname.setAttribute("name","lname");
lastname.setAttribute("id","last-name");
lastname.setAttribute("placeholder","last name");
lastname.classList.add("form-control");

let email = document.createElement("input");
email.setAttribute("type","email");
email.setAttribute("name","email");
email.setAttribute("id","email");
email.setAttribute("placeholder","email");
email.classList.add("form-control");

let address = document.createElement("textarea");
address.setAttribute("name","address");
address.setAttribute("id","address");
address.setAttribute("placeholder","Address");
address.classList.add("form-control");

let pincode = document.createElement("input");
pincode.setAttribute("type","text");
pincode.setAttribute("name","pincode");
pincode.setAttribute("id","pincode");
pincode.setAttribute("placeholder","pincode");
pincode.classList.add("form-control");

// gender radio

let male = document.createElement("input");
male.setAttribute("type","radio");
male.setAttribute("name","gender");
male.setAttribute("id","male");
male.setAttribute("value","male");
male.classList.add("form-check-input");

let female = document.createElement("input");
female.setAttribute("type","radio");
female.setAttribute("name","gender");
female.setAttribute("id","female");
female.setAttribute("value","female");
female.classList.add("form-check-input");

// foodchoice checkbox
let veg = document.createElement("input");
veg.setAttribute("type","checkbox");
veg.setAttribute("name","foodchoice1");
veg.setAttribute("id","veg");
veg.setAttribute("value","veg");
veg.classList.add("form-check-input");

let nonveg = document.createElement("input");
nonveg.setAttribute("type","checkbox");
nonveg.setAttribute("name","foodchoice2");
nonveg.setAttribute("id","nonveg");
nonveg.setAttribute("value","nonveg");
nonveg.classList.add("form-check-input");

let vegan = document.createElement("input");
vegan.setAttribute("type","checkbox");
vegan.setAttribute("name","foodchoice3");
vegan.setAttribute("id","vegan");
vegan.setAttribute("value","vegan");
vegan.classList.add("form-check-input");

let paleo = document.createElement("input");
paleo.setAttribute("type","checkbox");
paleo.setAttribute("name","foodchoice4");
paleo.setAttribute("id","paleo");
paleo.setAttribute("value","paleo");
paleo.classList.add("form-check-input");

let keto = document.createElement("input");
keto.setAttribute("type","checkbox");
keto.setAttribute("name","foodchoice5");
keto.setAttribute("id","keto");
keto.setAttribute("value","keto");
keto.classList.add("form-check-input");

let state = document.createElement("input");
state.setAttribute("type","text");
state.setAttribute("name","state");
state.setAttribute("id","state");
state.classList.add("form-control");

let country = document.createElement("input");
country.setAttribute("type","text");
country.setAttribute("name","country");
country.setAttribute("id","country");
country.classList.add("form-control");

let button = document.createElement("input");
button.setAttribute("type","button");
button.setAttribute("value","Submit");
button.setAttribute("id","submit");
button.setAttribute("name","submit");
button.classList.add("btn","btn-primary");
button.addEventListener("click",  callOnSubmit);

let br = document.createElement("br");
let h1 = document.createElement("h1");
h1.innerText = "Details Form";
h1.id="title";
let p1 = document.createElement("p");
p1.innerText = "Form Details will be added to table on submit";
p1.id="description";

// building form
form.appendChild(h1);
form.appendChild(p1);
form.appendChild(l_firstname);
form.appendChild(firstname);
form.appendChild(l_lastname);
form.appendChild(lastname);
form.appendChild(l_email);
form.appendChild(email);
form.appendChild(l_address);
form.appendChild(address);
form.appendChild(l_pincode);
form.appendChild(pincode);
form.appendChild(l_gender);
form.appendChild(br.cloneNode());
form.appendChild(male);
form.appendChild(l_male);
form.appendChild(female);
form.appendChild(l_female);
form.appendChild(br.cloneNode());
form.appendChild(l_choiceOfFood);
form.appendChild(br.cloneNode());
form.appendChild(veg);
form.appendChild(l_veg);
form.appendChild(nonveg);
form.appendChild(l_nonveg);
form.appendChild(vegan);
form.appendChild(l_vegan);
form.appendChild(paleo);
form.appendChild(l_paleo);
form.appendChild(keto);
form.appendChild(l_keto);
form.appendChild(br.cloneNode());
form.appendChild(l_state);
form.appendChild(state);
form.appendChild(l_country);
form.appendChild(country);
form.appendChild(br.cloneNode());
form.appendChild(button);


// building table

let tableDiv = document.getElementById("tableDiv");
let tableHeaders = ["First Name", "Last Name", "Email", "Address", "Pincode", "Gender", "Choice of Food", "State", "Country"];

const createTable = () => {
    let detailsTable = document.createElement("table");
    detailsTable.classList.add("table","table-striped","table-bordered","border-primary");
    let head = document.createElement("thead");
    let headrow = document.createElement("tr");

    tableHeaders.forEach(h => {
        let header = document.createElement("th");
        header.innerText = h;
        header.setAttribute("scope","col");
        headrow.appendChild(header);
    });

    head.appendChild(headrow);
    detailsTable.appendChild(head);

    let body = document.createElement("tbody");
    body.className="tableBody";
    body.id="tableFill";
    detailsTable.append(body);
    tableDiv.append(detailsTable);
}

createTable();

// form collection
function fillTable() {
    let formColl = document.forms["dynamicForm"];
    
    function checkItems() {
        let res = "";
        if(formColl.foodchoice1.checked == true){
            res+=" ";
            res+=formColl.foodchoice1.value;
        }
        if(formColl.foodchoice2.checked == true){
            res+=" ";
            res+=formColl.foodchoice2.value;
        }
        if(formColl.foodchoice3.checked == true){
            res+=" ";
            res+=formColl.foodchoice3.value;
        }
        if(formColl.foodchoice4.checked == true){
            res+=" ";
            res+=formColl.foodchoice4.value;
        }
        if(formColl.foodchoice5.checked == true){
            res+=" ";
            res+=formColl.foodchoice5.value;
        }
        return res;
    }
    
    
    
    let data = {
        "first": formColl.fname.value,
        "last": formColl.lname.value,
        "email": formColl.email.value,
        "addr": formColl.address.value,
        "pin": formColl.pincode.value,
        "gender": formColl.gender.value,
        "foodChoice": checkItems(),
        "state":formColl.state.value,
        "country": formColl.country.value
    };
    
    let dataItems = Object.keys(data);
    
    // On submit fill table row
    
    let tableFill = document.getElementById("tableFill");
    let datarow = document.createElement("tr");
    dataItems.forEach(item => {
        let tableData = document.createElement("td");
        tableData.innerText = data[item];
        datarow.append(tableData);
    });
    tableFill.append(datarow);
}

function clearForm() {
    document.getElementById("form").reset();
}

function callOnSubmit() {
    fillTable();
    clearForm();
}






