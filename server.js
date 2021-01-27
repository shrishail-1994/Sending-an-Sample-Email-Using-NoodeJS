const nodemailer = require('nodemailer');
const mailconfig = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: 'shrishail1994yaranal@gmail.com',
        pass: '8095608349'  
          }
});
const mailoptions = {
    from: 'shrishail1994yaranal@gmail.com',
    to: 'shrishail1994yaranal@gmail.com',
    subject: 'Hello NodeJs',
    html: `<h1>Hello I am shrishail send mail using nodejs technology</h1>`
};
mailconfig.sendMail(mailoptions, (err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log('mail is sent' + info.response);
    }
});

//asynchronous
setTimeout(() => {
    console.log('hello');
}, 10000);

var v="how r u";
console.log(v);
