const CODEPOSTALURL = 'https://geo.api.gouv.fr/communes?codePostal='
const ADRESSEURL = "https://api-adresse.data.gouv.fr/search/?q=autocomplete=1"






//.catch(error => alert("Erreur : " + error));

function search() {
    // document.getElementByTagName('ul').innerHTML = "";
    let adresse = document.getElementById('adresse').value
    // let codePostal = document.getElementById('zipcode').value
    // let ville = document.getElementById('city')
    let error = document.getElementById('errormessage')

    fetch(ADRESSEURL + adresse)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            // let p = document.createElement('p');
            // p.innerText = json.features[0].properties.label;
            // document.getElementById('wrapper').appendChild(p);
            // console.log(json)
            json.features.forEach(function (element) {
                // console.log(element.properties.label)
                let p = document.createElement('option');
                p.innerText = element.properties.label;
                document.getElementById('wrapper').appendChild(p);
            });

        });

};

// let i = []