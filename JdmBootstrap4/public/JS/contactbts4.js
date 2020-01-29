
//-------------------------regex-------------------------------------
let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/
let nomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/
let mailValid = /^[a-zA-Z0-9.-]+@[a-z0-9.-]+.[com|fr]{2,4}$/;
let telValid = /^((\+)33|0)[1-9](\d{2}){4}$/;

//----------------var--prenom--------------------------
let formValid = document.getElementById('click');
let prenom = document.getElementById('lname');
// let missPrenom = document.getElementById('missPrenom');
// -----------var----nom-----------------------------------
let nom = document.getElementById('fname');
// let noName = document.getElementById('noName');
//----------mail-------------------------------------
let mail = document.getElementById('email');
// let noMail = document.getElementById('noMail');
//---------var-----tel--------------
let tel = document.getElementById('tel');
// let noTel = document.getElementById('noTel');
//------------------------------------------------
let error = document.getElementById('feedback')
// element = document.getElementsByTagName('input')





//-------------------japelle----i call-----------------------

formValid.addEventListener('click', function (event) {
    validContactForm(event, prenom, prenomValid,error);
    validContactForm(event, nom, nomValid, error);
    validContactForm(event, mail, mailValid, error );
    validContactForm(event, tel, telValid, error );
    // console.log(event);


});
//----------------------je recois----i receved----------------
function validContactForm(event, Element, ElementValid, error) {
    //Si le champ est vide
    if (Element.validity.valueMissing) {
        event.preventDefault();
        console.log(error);
        error.textContent = 'contenu manquant';
        error.style.color = 'red';
    } else if (ElementValid.test(Element.value) == false) {
        event.preventDefault();
        error.textContent = 'Format incorrect';
        error.style.color = 'orange';
    } else {
        error.textContent = '\u2714';
        error.style.color = 'green';
        console.log('ok')
    }
}
