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

//https://frankjprovenzano.com/resourses/images/08.jpg

function sendEmail(e) {
    photoName = e +'.jpg';
    url = 'https://frankjprovenzano.com/resourses/images/'+ e +'.jpg';
    
    location.href = 'emailForm.html?url='+url;
}

/*
function sendEmail() {
Email.send({
    Host: "smtp.gmail.com",
    Username: 'olga.cercalavoro@gmail.com',
    Password: '0r1g1n3_Perdut@',
    To : 'gugli.venturi@gmail.com',
    From : "olga.cercalavoro@gmail.com",
    Subject : "Test Email",
    Body : "<html><h2>Hello</h2>This is the image you<strong>downloaded</strong>.</br></html>",
	Attachments : [
	{
		name : photoName,
		path : url
	}]
	}).then(function (message) {
        console.log("mail sent successfully");
        alert("mail sent successfully")
    });

    .then(
        message => alert(message)
  )
}
*/

/*

function sendEmail(){
    console.log("I touch Download");
    try{
        var theApp = new ActiveXObject("Outlook.Application");
        var objNS = theApp.GetNameSpace('MAPI');
        var theMailItem = theApp.CreateItem(0); // value 0 = MailItem
        theMailItem.to = ('quaranta.olga@gmail.com');
        theMailItem.Subject = ('Test Email');
        theMailItem.Body = ('<html><h2>Hello</h2>This is the image you<strong>downloaded</strong>.</br></html>');
        theMailItem.Attachments.Add(photoName);
        theMailItem.display();
    }
    catch (err) {
        alert(err.message);
    } 
}
*/

/*
function send_email() {
    var result = "";

    var oMail = new EASendMail.SmtpMail("TryIt");

    // Set sender email address, please change it to yours
    oMail.from = new EASendMail.MailAddress("olga.cercalavoro@gmail.com");

    // Add recipient email address, please change it to yours
    oMail.to.add(new EASendMail.MailAddress("quaranta.olga@gmail.com"));

    // Set email subject
    oMail.subject = "Test email with attachment from JavaScript Frank project";

    // Set HTML body
    oMail.htmlBody = "<font size=5>This is</font> <font color=red><b>a test</b></font>";

    var oServer = new EASendMail.SmtpServer("smtp.gmail.net");

    // User and password for ESMTP authentication
    oServer.user = "olga.cercalavoro@gmail.com";
    oServer.password = "TestPassword";

    // If your SMTP server requires TLS connection on 25 port, please add this line
    // oServer.connectType = EASendMail.SmtpConnectType.connectSSLAuto;

    // If your SMTP server requires SSL connection on 465 port, please add this line
    // oServer.port = 465;
    // oServer.connectType = EASendMail.SmtpConnectType.connectSSLAuto;

    var oSmtp = new EASendMail.SmtpClient();


    // get a file path from PicturesLibrary,
    // to access files in PicturesLibrary, you MUST have "Pictures Library" checked in
    // your project -> Package.appxmanifest -> Capabilities
    Windows.Storage.KnownFolders.picturesLibrary.getFileAsync("test.jpg")
    .then(function (file) {

        //var attfile = file.path;
        // if you want to add attachment from remote URL instead of local file.
        var attfile = "file:///D:/OLGA/ProgettoFrank/resourses/images/02.jpg";
        // var attfile = "http://www.emailarchitect.net/test.jpg";

        return oMail.addAttachmentAsync(attfile);
    })
    .then(function (oAttachment) {
        // you can change the Attachment name by
        // oAttachment.name = "mytest.jpg";
        return oSmtp.sendMailAsync(oServer, oMail);
    })
    .done(function () {

        result = "Email was sent successfully!";
        // Display Result by Diaglog box
        (new Windows.UI.Popups.MessageDialog(result, "Success")).showAsync();
    },

    // error handle
    function (e) {
        // because javascript exception only gives the stack trace messages, but it is not
        // real description of exception, so we give a property lastErrorMessage for javascript.
        if (oMail.lastErrorMessage != "") {
            result = oSmtp.lastErrorMessage;
        }
        else if (oSmtp.lastErrorMessage != "") {
            result = oSmtp.lastErrorMessage;
        }
        else {
            result = e.message;
        }
        (new Windows.UI.Popups.MessageDialog(result, "Error Information")).showAsync();
    });
}*/