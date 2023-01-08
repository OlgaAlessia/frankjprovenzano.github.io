
jQuery(document).ready(function($) { 
    /*baguetteBox.run('.baguetteBox', { animation: 'fadeIn', noScrollbars: true, captions: createCaption });*/

    var pageGridPicture = $('body').hasClass('page-template-tpl-gridPictures');

    if (pageGridPicture) {
    baguetteBox.run('.baguetteBox', {
        captions: createCaption, // display image captions.
        buttons: 'auto', // arrows navigation
        fullScreen: false,
        noScrollbars: true,
        bodyClass: 'baguetteBox-open',
        titleTag: false,
        async: false,
        preload: 2,
        animation: 'slideIn', // fadeIn or slideIn
        verlayBackgroundColor: 'rgba(0,0,0,.8)'});
    }
});

function createCaption(element) {
    return element.getElementsByTagName('img')[0].alt +'<button class="m-2 btn btn-danger btn-xs">Dowload</button>';
}
