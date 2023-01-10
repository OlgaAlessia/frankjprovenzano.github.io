var photoName = "";
var url = "";

jQuery(document).ready(function($) { 
    /*baguetteBox.run('.baguetteBox', { animation: 'fadeIn', noScrollbars: true, captions: createCaption });*/

    var pageGridPicture = $('body').hasClass('page-template-tpl-gridPictures');

    if (pageGridPicture) {
        baguetteBox.run('.gallery-wrapper', {
            fullScreen: false,
            captions: createCaption, // display image captions.
            noScrollbars: true,
            preload: 4,
            animation: 'fadeIn', // fadeIn or slideIn
        });
    }
});

function createCaption(element) {
    return  element.getElementsByTagName('img')[0].alt +'<button class="m-2 btn" onclick="sendEmail(\'' + element.id + '\')"><i class="fa fa-download"></i> Download</button>';
}

function sendEmail(e) {

    photoName = e +'.jpg';
    url = 'https://frankjprovenzano.com/resourses/images/'+ e +'.jpg';

    let email = prompt("Please enter your email address");

    if (email != null || email != "") {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: 'olga.cercalavoro@gmail.com',
            Password: '05E505F6D8464F6EC37C43CBDC30B04134B3',
            To : email, //quaranta.olga@gmail.com
            From : "picture@frankjprovenzano.com",
            Subject : "Test Email",
            Body : "<html><h2>Hello</h2>This is the image you<strong>downloaded</strong>.</br></html>",
            Attachments : [
            {
                name : photoName,
                path : url
            }]
        })
        .then(
            message => alert(message)
        );
    }else
    {
        alert("Email not valid");
    }

}

