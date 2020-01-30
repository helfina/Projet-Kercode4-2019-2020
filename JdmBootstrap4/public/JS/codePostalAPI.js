$(document).ready(function () { 
    const apiUrl = 'https://geo.api.gouv.fr/communes?codePostal=';    
    const format = '&format=json';  
    let zipcode = $('#zipcode'); 
    let city = $('#city');    
    let errorMessage = $('#error-message');
    
    $(zipcode).on('blur', function () {        
        let code = $(this).val();
        console.log(code);        
        let url = apiUrl + code + format;        
        // console.log(url);
        // si tu change la valeur de zipcode alors tu filtre les resultat
        /*$(zipcode).on("keyup", function() {
        * var value = $(this).val().toLowerCase();
        * $("select option").filter(function() {
        * $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        *});*/

        fetch(url, { method: 'get'}).then(response => response.json()).then(results => {           
            // console.log(results);
                
            if (results.length) {
                $(errorMessage).text('').hide();                
                $.each(results, function (key, value) {
                    // console.log(value);                    
                    // console.log(value.nom);                    
                    $(city).append('<option value="'+value.nom+'">'+value.nom+'</option>');                    
                });

            } else {
                if ($(zipcode).val()) {
                    // console.log('Erreur de code postal.');                    
                    $(errorMessage).text('Aucune communes avec ce code postal.').show();
                }

                else{
                    $(errorMessage).text('veuillez rentrez un code postal').show();                    
                }
            }
        })
        .catch(err => {
            console.log(err);
        });       
    });
   

   
});