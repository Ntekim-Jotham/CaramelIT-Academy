const express=require('express');
const router=express.Router();
const nodemailer=require('nodemailer');

router.post('/',(req,res)=>{
    const output=`
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Phone: ${req.body.phone}</li>
        <li>Email: ${req.body.email}</li>
        <li>Country: ${req.body.country}</li>
        <li>State: ${req.body.states}</li>
        <li>ZIP: ${req.body.zip}</li>
        <li>Program: ${req.body.program}</li>
        <li>Sub-Program: ${req.body.subprogram}</li>
        <li>IT Services: ${req.body.service}</li>
        <li>Budget: ${req.body.budget}</li>
        <li>User Experience: ${req.body.userE}</li>
        <li>Program: ${req.body.program}</li>
    </ul>
    `;

    // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'caramelitacademy1@gmail.com', // generated ethereal user
      pass: 'Caramel_IT1', // generated ethereal password
    },
    tls:{
        rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: `"Customer" <${req.body.email}>`, // sender address
    to: "caramelitacademy1@gmail.com", // list of receivers
    subject: "Node Contact Request", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

module.exports=router;