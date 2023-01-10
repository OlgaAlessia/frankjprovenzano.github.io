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
    return  element.getElementsByTagName('img')[0].alt +'<button class="m-2 btn" onclick="goToForm(\'' + element.id + '\')"><i class="fa fa-download"></i> Download</button>';
}

//https://frankjprovenzano.com/resourses/images/08.jpg

function goToForm(e) {
    photoName = e +'.jpg';
    url = 'https://frankjprovenzano.com/resourses/images/'+ e +'.jpg';
    
    location.href = 'emailForm.html?url='+url;
}
