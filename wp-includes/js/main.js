//lightbox.option({ 'showImageNumberLabel': false });

/*
lightbox.run('.tz-gallery', { captions: createCaption });

function createCaption(element) {
    return '<button class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-download-alt"></span></button>';
} */

jQuery(document).ready(function($) { 
    /*baguetteBox.run('.baguetteBox', { animation: 'fadeIn', noScrollbars: true, captions: createCaption });*/

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
});

function createCaption(element) {
    return element.getElementsByTagName('img')[0].alt +'<button class="m-2 btn btn-danger btn-xs" onclick="DownloadImage()">Dowload</button>';
}

    //var caption = element.getElementsByTagName('img')[0].alt;
    //console.log(caption);
    //if (caption = "")  {
    //    return '<button class="m-2 btn btn-danger btn-xs" onclick="DownloadImage()">Dowload</button>';

function DownloadImage() {
    return this;
}

