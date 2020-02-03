// $(document).ready(function(){
//  $('#click').click(function () { 
//         console.log("ok");
//         // e.preventDefault();        

//         let apiUrl = "https://slack.com/api/chat.postMessage";
//         let channel = "#bot";
//         let text = document.getElementById('comment').value;
//         let nom = document.getElementById('lnameC').value;
//         // let prenom = document.getElementById('fname').value;
//         // let tel = document.getElementById('telC').value;
//         // let mail = document.getElementById('email').value;
//         // let tab = new [nom, prenom, tel, mail].values;



//         $.ajax({                   
//             data: {
//                 "token": creds.token,
//                 "channel": channel,
//                 "text": nom + " : " + text,
//             },                      
//             dataType: 'text',
//             type: 'POST',           
//             url: apiUrl,
//             error: function(xhr,status,error){              
//                 console.log("error: " + error);

//             },
//             success: function(data) {
//                 console.log("result: " + data);
//             }
//         });
//     });
// });

// $(document).ready(function(){
// let nom = document.getElementById("lnameC").value;
// let prenom = document.getElementById("fnameC").value;
// let tel = document.getElementById("telC").value;
// // let adresse  = document.getElementById("street").value;
// let token = creds.token;
// let mail = document.getElementById("emailC").value;
// let channel = "#bot";
// let url = "https://slack.com/api/chat.postMessage";

// $.ajax({
// data: {
//     "channel": channel,
//     "text":nom +" : "+ prenom +" : "+ tel +" : "+ adresse +" : "+ mail,
//     "token": token,
// },
// dataType: "text",
// url: url,
// type: "POST",
// }).done(function (response) {
// console.log(response)
// }).fail(function (error) {
// console.log(error)
// });
// });

// $(document).ready(function(){
// $('#click').click(function(){


//     let nom = $("#lnameC").val();
//     let prenom = $("#fnameC").val();
//     let tel = $("telC").val();
//     // let adresse  = document.getElementById("street").value;
//     let token = creds.token;
//     let mail = $("#emailC").val();
//     let channel = "#bot";
    

//     $.ajax({

//          url:"https://slack.com/api/chat.postMessage",
//         data: {
//             "channel": channel,
//             "text": nom + " : " + prenom + " : " + tel + " : " + adresse + " : " + mail,
//             "token": token,
//         },
//         dataType: "text",      
//         type: "POST",
//     }).done(function (response) {
//         console.log(response)
//     }).fail(function (error) {
//         console.log(error)
//     });
//     console.log('plop')
// });
// });
$(document).ready(function(){  
    $('#click').click(function () { 
        console.log("ok");
        // e.preventDefault();        

        let apiUrl = "https://slack.com/api/chat.postMessage";
        let channel = "#bots";
        let text = document.getElementById('comment').value;
        // let nom = document.getElementById('lnameC').value;
        // let prenom = document.getElementById('fname').value;
        let tel = document.getElementById('telC').value;
        // let mail = document.getElementById('email').value;
        // let tab = new [nom, prenom, tel, mail].values;

        
        
        $.ajax({                   
            data: {
                "token": creds.token,
                "channel": channel,
                "text": text,
            },                      
            dataType: 'text',
            type: 'POST',           
            url: apiUrl,
            error: function(xhr,status,error){              
                console.log("error: " + error);
                
            },
            success: function(data) {
                console.log("result: " + data);
            }
        });
    });

  });





























// let data = {
//     something: "something to send"
// }
// $ajax({
//     url: 'https://slack.com/api/chat.postMessage'
//     type: "POST",
//     Headers: {
//         "Authorization":"Bearer t0k3n"
//     },
//     data: JSON.stringify(data),
//     contentType: "application/json; charset=utf-8",
//     dataType: "json"
// }).done(function(response){
//     //when it s done
//     console.log(response)
// }).fail(function(error){
//     //when it fail
//     console.log(error)
// })