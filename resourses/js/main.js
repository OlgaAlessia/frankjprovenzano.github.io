var photoName = "";
var url = "";

jQuery(document).ready(function($) { 

    $('#toTop').on('click', function(e) {
        e.preventDefault();
        $('html').animate( 
            { scrollTop: '0' }, '5000');
    });

    /*baguetteBox.run('.baguetteBox', { animation: 'fadeIn', noScrollbars: true, captions: createCaption });*/

    baguetteBox.run('.gallery-wrapper', {
        fullScreen: false,
        captions: createCaption, // display image captions.
        noScrollbars: true,
        preload: 4,
        animation: 'slideIn', // fadeIn or slideIn
    });
    
});

function createCaption(element) {
    return  element.getElementsByTagName('img')[0].alt +'<button class="m-2 btn buttonCaption" onclick="sendEmail(\'' + element.id + '\')"><i class="fa fa-download"></i> Download</button>';
    //return  element.getElementsByTagName('img')[0].alt +'<button onclick="openPanel(\'' + element.id + '\')" type="button" class="m-2 btn buttonCaption" data-bs-toggle="modal" data-bs-target="#exampleModal">Download</button>';
}

function sendEmail(photoName) {

    url = 'https://frankjprovenzano.com/resourses/images/'+ photoName;

    let email = prompt("Please enter your email address");

    if (email == "") {
        alert("The Email is not valid.");
    }
    if (email != null && email != "" ){
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: 'picture@frankjprovenzano.com',
            Password: '706B1CB8BC75565FCDC2D7A9802CD038E6FB',
            To : email,
            From : "picture@frankjprovenzano.com",
            Subject : "Photo of Frank",
            Body : "<html>Thank you for visiting the site. \n Attached you will find the photo you have selected.\n On behalf of the Provenzano's Family, we thank you for keeping Frank's memory alive. 🤟 </html>",
            Attachments : [
            {
                name : photoName,
                path : url
            }]
        })
        .then(function (message) {
            if (message = "OK") { 
                alert("Email successfully sent. Check an email from picture@frankjprovenzano.com in your SPAM folder as well.");
            }
            else { alert(message); }
        });
    }
}


