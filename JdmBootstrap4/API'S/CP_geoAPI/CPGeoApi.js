$(document).ready(function () {
    // alert('ok')(pour verifier que les deux page sont bien lier)
    /*je stock dans une constant l'url de mon api
     *(c'est la base de l'url vers laquelle on va envoyé nos requetes)*/
    const apiUrl = 'https://geo.api.gouv.fr/communes?codePostal=';
    //on recupere les donner au format json
    const format = '&format=json';
    //je stock dans mes variable le zipcode et la ville
    let zipcode = $('#zipcode');
    // c'est le select que l'on va remplir dynamiquement
    let city = $('#city');
    // sa nous permettra d'afficher un message d'erreur si il y en a un
    let errorMessage = $('#error-message');
//j'ecoute(.on) quand je quitte le champ (blur) code postal
    $(zipcode).on('blur', function () {
        //je stock dans une variable this (le champs code postal).sa valeur
        let code = $(this).val();
        // console.log(code);
        /*on stock dans une variable notre constante url concatené au code postal+ le format*/
        let url = apiUrl + code + format;
         //sa me donne l'url  dans laquelle on envoie notre requete a l'api
        // console.log(url);

        fetch(url, {//j'envoie ma requete a l'api 
        //on defint la methode d'envoie qui est get
            method: 'get'
            //on veut la response au format json
        }).then(response => response.json()).then(results => {
            //on affiche le resultat
            // console.log(results);
            /*on va remplir le champs si il y a des resultat envoyer par l'api
            *on commence par checkez si il ya des resultat renvoyer par l'api */           
            if (results.length) {

                $(errorMessage).text('').hide();
                //alors on va boucler dessus
                $.each(results, function (key, value) {

                    // console.log(value);
                    //on recupere la valeur du champs et le nom de la commune(.warm pour avoir une couleur different)
                    console.log(value.nom);
                    /* on remplit le champ select pour pouvoir proposer plusieur communes a l'utilisateur
                    *on recupere city et on lui ajoute la balise option avec une valeur(sa valeur est value.nom)*/
                    $(city).append('<option value="'+value.nom+'">'+value.nom+'</option>');
                });
// maintenant on gere les erreurs si il n'y a pas de communes qui correspond au code postal
            } else {// si il n'ya pas de resultat
                if ($(zipcode).val()) {// si dans le zipcode il ya a bien une valeur
                    console.log('Erreur de code postal.');
                    //alors on affiche le message
                    $(errorMessage).text('Aucune communes avec ce code postal.').show();
                }
                else{// sinon si il n'ya pas de valeur alors tu affiche entrez un code postal
                    $(errorMessage).text('veuillez rentrez un code postal').show();                    
                }
            }
        })
        //c'est pour ratrapper les erreures qui nous son renvoyer
        .catch(err => {
            console.log(err);
        });
    });
});