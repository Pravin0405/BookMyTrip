
var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

// Create a SMTP transporter object
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'bookmytrip10@gmail.com',
        pass: '18101992'
    },
    logger: true, // log to console
    debug: true // include SMTP traffic in the logs
}, {
    // default message fields

    // sender info
    from: 'Book My Trip <bookmytrip10@gmail.com>',
    headers: {
        'X-Laziness-level': 1000 // just an example header, no need to use this
    }
});


app.get('/postEmail',function(req,res){

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Message object
    var message = {

        // Comma separated list of recipients
        to: '"'+req.query.fName +''+ req.query.lName+'"<'+ req.query.email +'>',


        // Subject of the message
        subject: 'Booking Confirmation ', //

        // HTML body
        html: '<h3>Dear Customer, </h3>'+' <h4>Your Booking is confirmed!! Details are</h4>'+
        '<pre>'+req.query.fName +' '+ req.query.lName +'('+ req.query.mobile +')'+
        ' will depart for '+ req.query.location +' on '+ req.query.startdt +
        ' and return on '+  req.query.returndt+ '</pre>'+ ' Thanks,'+'Book My Trip'

    };


    transporter.sendMail(message, function (error, info) {
        if (error) {
            res.send('Message sent successfully!',req.query);
            return;
        }
        res.send(req.query);

    });
});

app.listen(3006,function(){
    console.log('app listening the port 3006');
});