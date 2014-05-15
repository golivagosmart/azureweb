/**
 * Created by goliva on 14-05-14.
 */

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

$( document ).ready(function() {

    var p = true;

    $( "#enviar" ).click(function(e) {
        if(p){
        e.preventDefault();

        var email = $('#email').val();
        var nombre = $('#nombre').val();
        var fono = $('#fono').val();

        var q = true;

            if(!isValidEmailAddress( email )){
                $("#email").formError( "Debe ingresar un E-mail valido"); q=false;
            }else { $("#email").formError( {remove:true ,successImage: {enabled:false}});  }

            if(nombre.length<1){
                $("#nombre").formError( "Debe ingresar su nombre"); q=false;
            }else { $("#nombre").formError( {remove:true ,successImage: {enabled:false}});  }
            if(fono.length<1){
                $("#fono").formError( "Debe ingresar su telefono"); q=false;
            }else { $("#fono").formError( {remove:true,successImage: {enabled:false}});  }

        if(q){
        $.ajax({
            url: "/contacto",
            cache: false,
            data: {email: email, nombre: nombre ,fono : fono  },
            type: "POST"
        })
            .done(function( html ) {
                p = false;
                $( "#enviar" ).text('Gracias, Mensaje Enviado!');
            }
        );

        }
    }

    });


});