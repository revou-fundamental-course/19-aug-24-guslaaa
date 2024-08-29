// ini javascript

// Replace User/Promt
function replaceusername () {
    let namaUser = prompt("Siapa Anda?");
    let ucapan = "Hallo"+namaUser+"Welcome to Our Website";
    document.getElementById("welcome").innerHTML = ucapan;
}

// Untuk Banner Autoslide
var slideIndex = 1;
showDivs(slideIndex);
                    
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var imglist = document.getElementsByClassName("img-slideshow");
    if (n > imglist.length) {slideIndex = 1}
    else if (n < 1) {slideIndex = imglist.length} ;
    for (i = 0; i < imglist.length; i++) {
        imglist[i].style.display = "none";
    }
    imglist[slideIndex -1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 2000);


// Untuk From Validation
function validateForm() {
    const username = document.forms["the-form"]["fullname"].value;
    const birthDate = document.forms["the-form"]["birthdate"].value;
    const gender = document.forms["the-form"]["gen-select1"].value;
    const message = document.forms["the-form"]["message-input"].value;

    if (username == "" || birthDate == "" || gender == "" || message == "") {
        alert("all field must not be empty");
        return false;
    }
    
    setSenderUI(username, birthDate, gender, message);
}


// Untuk Menampilkan Result Form
function setSenderUI(username, birthDate, gender, message) {
    document.getElementById("sender-name").innerHTML = username;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = message;
}