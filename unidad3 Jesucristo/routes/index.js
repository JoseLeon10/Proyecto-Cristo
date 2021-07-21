var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', async (req, res, next) => {

var nombre = req.body.nombre;
var apellido = req.body.apellido;
var email = req.body.email;
console.log(req.body);

var obj = {
  to: 'joseagudo_23@hotmail.com',
  subject: 'contacto del curso',
  html: nombre + " " + apellido + " se inscribio a este curso: " + email + ". <br> por este email, le estaremos mandando todo el material"
}

});

var transporter = nodemailer.createTransport ({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

var info = await transporter.sendMail(obj);

res.render('index', {
  message: 'Mensaje enviado correctamente',
});


module.exports = router;
