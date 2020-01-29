$(document).ready(function () {
    const apiUrl = 'https://api-adresse.data.gouv.fr/search/?q=';

    const format = '&format=json';

    let adresse = $('#adresse');

    let city = $('#city');

    let errorMessage = $('#error-message');

    $(adresse).on('blur', function () {

        let adresse = $(this).val();
        // console.log(adresse);

        let url = apiUrl + adresse + format;

        // console.log(url);

        fetch(url, { method: 'get'}).then(response => response.json()).then(results => {

                // console.log(results);

                if (results.length) {
                    // $(errorMessage).text('').hide();

                    $format.each(results, function (element) {

                        console.log(element.properties.label);

                        console.log(value.nom);

                        $(city).append('<option value="' + value.element + '">' + value.element + '</option>');
                    });

                } 
                 else {
                    if ($(adresse).val()) {
                        console.log('Erreur de code postal.');
                        $(errorMessage).text('Aucune communes avec ce code postal.').show();
                    } 

                    else {
                        $(errorMessage).text('veuillez rentrez une adresse').show();
                    }
                }
        })
            // c'est pour ratrapper les erreures qui nous son renvoyer
            .catch(err => {
                console.log(err);
            });
    });
});