/**
 * Created by goliva on 14-05-14.
 */


exports.index = function(req, res){


    // recuperamos los datos

     var email = req.body.email;
     var nombre = req.body.nombre;
     var fono = req.body.fono;



    // mostramos la consola

    try{

        console.log('nuevo contacto '+ email + ' '+nombre + ' '+ fono);

    }catch (err){ console.log('console' + err); }



    try{

        var fs = require('fs');
        var stream = fs.createWriteStream(email+"contactos.txt");
        stream.once('open', function(fd) {
            stream.write( email + ' '+nombre + ' '+ fono +" \n");
            stream.end();
        });

    }catch (err){ console.log('txt'+err); }


    //mandamos un mail
    try{
        var nodemailer = require("nodemailer");

        var smtpTransport = nodemailer.createTransport("SMTP",{
            service: "Gmail",
            auth: {
                user: 'olivagus@gmail.com',
                pass: 'wathsupman"'
            }
        });

        var mailOptions = {
            from: "olivagus@gmail.com", // sender address
            to: 'goliva@gosmart.cl', // list of receivers
            subject: "Nuevo Contacto", // Subject line
            html: "Robot Mail Go!Smart " + email + ' '+nombre + ' '+ fono // html body
        }

        smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log("ocurrio un error, intentalo mas tarde" + error);

            }else{
                console.log("email enviado con exito")
            }

            smtpTransport.close();
        });


}catch (err){ console.log('email err'+err); }


    res.send('Gracias!');


};