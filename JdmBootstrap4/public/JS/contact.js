
//------------------prenom--------------------------
let formValid = document.getElementById('btnEnvoi');
let prenom = document.getElementById('prenomContact');
let missPrenom = document.getElementById('missPrenom');
let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/

formValid.addEventListener('click', validPrenom);

function validPrenom(event) {
    //Si le champ est vide
    if (prenom.validity.valueMissing) {        
        event.preventDefault();       
        missPrenom.textContent = 'Prénom manquant';
        missPrenom.style.color = 'red';
    } else if (prenomValid.test(prenom.value) == false) {
        event.preventDefault();
        missPrenom.textContent = 'Format incorrect';
        missPrenom.style.color = 'orange';
    } else {
        missPrenom.textContent = '\u2714';
        missPrenom.style.color = 'green';
        console.log('ok')}
}
// ---------------nom-----------------------------------
let nom = document.getElementById('nomContact');
let noName = document.getElementById('noName');
let nomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/

formValid.addEventListener('click', validNom);

function validNom(event) {
    //Si le champ est vide
    if (nom.validity.valueMissing) {    
        event.preventDefault();
        noName.textContent = 'nom manquant';
        noName.style.color = 'red';
        //Si le format de données est incorrect
    } else if (nomValid.test(nom.value) == false) {
        event.preventDefault();
        noName.textContent = 'Format incorrect';
        noName.style.color = 'orange';
    } else {
        noName.textContent = '\u2714';
        noName.style.color = 'green';
        console.log('ok')}
}
//----------mail-------------------------------------
let mail = document.getElementById('emailContact');
let noMail = document.getElementById('noMail');
let mailValid =  /^[a-zA-Z0-9.-]+@[a-z0-9.-]+.[com|fr]{2,4}$/;

formValid.addEventListener('click', validMail);

function validMail(event) {
    //Si le champ est vide
    if (mail.validity.valueMissing) {
        event.preventDefault();
        noMail.textContent = 'Mail manquant';
        noMail.style.color = 'red';
        //Si le format de données est incorrect
    } else if (mailValid.test(mail.value) == false) {
        event.preventDefault();
        noMail.textContent = 'Format incorrect';
        noMail.style.color = 'orange';
    } else {
        noMail.textContent = '\u2714';
        noMail.style.color = 'green';
        // console.log('ok')
    }
}
//--------------tel--------------
let tel = document.getElementById('telContact');
let noTel = document.getElementById('noTel');
let telValid = /^((\+)33|0)[1-9](\d{2}){4}$/;
formValid.addEventListener('click', validTel);

function validTel(event) {
    //Si le champ est vide
    if (tel.validity.valueMissing) {
        event.preventDefault();
        noTel.textContent = 'tel manquant';
        noTel.style.color = 'red';
        //Si le format de données est incorrect
    } else if (telValid.test(tel.value) == false) {
        event.preventDefault();
        noTel.textContent = 'Format incorrect';
        noTel.style.color = 'orange';
    } else {
        noTel.textContent = '\u2714';
        noTel.style.color = 'green';
        console.log('ok')
    }
}
