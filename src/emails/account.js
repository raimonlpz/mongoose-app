const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'raimonlpez@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with it.`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'raimonlpez@gmail.com',
        subject: 'Cancellation confirm',
        text: `Looks like you want to cancel suscription, anything we can do for you ${name}?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};