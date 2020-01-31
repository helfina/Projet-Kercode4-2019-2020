$(document).ready(function(){  
    $('#click').click(function () { 
        console.log("ok");
        // e.preventDefault();        

        let apiUrl = "https://slack.com/api/chat.postMessage";
        let channel = "#bot";
        let text = document.getElementById('comment').value;
        let nom = document.getElementById('lname').value;
        // let prenom = document.getElementById('fname').value;
        let tel = document.getElementById('tel').value;
        // let mail = document.getElementById('email').value;
        // let tab = new [nom, prenom, tel, mail].values;

        
        
        $.ajax({                   
            data: {
                "token": creds.token,
                "channel": channel,
                "text": tel+ ':' + text,
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