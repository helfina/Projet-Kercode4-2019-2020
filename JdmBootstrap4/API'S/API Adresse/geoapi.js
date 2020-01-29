const ADRESSEURL = "https://api-adresse.data.gouv.fr/search/?q="

let adresse = document.getElementById('adresse');

let error = document.getElementById('wrapper');

adresse.addEventListener("keyup", function () {

    let adresse2 = adresse.value;
    adresse.innerText = "";

    fetch(ADRESSEURL + adresse2)
        .then(function (response) {
            console.log('ok')
            return response.json();
        })

        .then(function (json) {

            json.features.forEach(function (feature) {
                // console.log(element.properties.label)
                let p = document.createElement('li');

                p.innerText = feature.properties.label;
                document.getElementById('wrapper').appendChild(p);

                p.addEventListener('click', function () {
                    console.log('ok2')
                    adresse.value = p.textContent;
                    adresse.innerHTML = "";

                });
            });

        });

});
//-----------------gestion du style-------avec jq-----------
// $(document).ready(function(){
//     let city = $('#wrapper');
//     $(city).append('<li'+value.nom+'">'+value.nom+'</li>');
//   });