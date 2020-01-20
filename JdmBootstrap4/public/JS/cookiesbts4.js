// ----------------------les cookies---------------------------------
// tentative de au chargement de la page tu affiche la barre de cookies
// window.alert.document.getElementById('cookies');
// addEventListener.onload('cookies').show;
//-------------------------------------------------------------------
//je créer mes variables en recuperant l'id de mes boutons
let ok = document.getElementById("ok");
let non = document.getElementById("refuser")
// je leur dit d'ecouter et d'aplliquer a levenement au click
ok.addEventListener("click", hidden)
non.addEventListener("click",redirectory)
function redirectory(){
    // je lui dit de rediriger ailleur 
    document.location.href="https://www.google.fr";
}
function hidden(){
    
  //je lui dit quand tu vas cliquer sur ton bouton ils se masquera
  document.getElementById("cookies").style.display = "none";
}
/*-----------------------------------------------------------------------
//si l'utilisateur accepte
document.getElementById("agree").addEventListener("click", hideCookiebar);
function hideCookiebar() {
  // je cache ma barre
  document.getElementById("cookie-bar").style.display = 'none';
  // si oui je stocke dans cookieAgree
  sessionStorage.setItem("cookieAgree", "true")
};
if(sessionStorage.getItem("cookieAgree") == "true"){
  // si oui ete si elle est stokér donc display none
  document.getElementById("cookie-bar").style.display = 'none';
}
//si l'utilisateur refuse
document.getElementById("stop-cookie").addEventListener("click", redirection);
function redirection() {
  
  document.location.href="https://www.google.com/"
  
};/-------------------------------------------------------------
// Récupération du champ à enregistrer
var champ = document.getElementById("champ");
 
// Vérification de l'existence d'une donnée enregistrée auparavant
// (ce ne sera le cas que si la page a été rafraîchie)
if (sessionStorage.getItem("autosave")) {
  // Restauration du contenu du champ
  champ.value = sessionStorage.getItem("autosave");
}
 
// Écoute des changements de valeur du champ
champ.addEventListener("change", function() {
  // Enregistrement de la saisie utilisateur dans le stockage de session
  sessionStorage.setItem("autosave", champ.value);
});*/
