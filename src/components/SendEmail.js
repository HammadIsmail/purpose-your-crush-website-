import emailjs from '@emailjs/browser';

const sendEmail = (Answer) => {
    var templateParams = {
      message:Answer
    };
    (function(){
      emailjs.init({
        publicKey: "jKYS-Zm28fRW5zF8Q",
      });
   })();
    emailjs.send('service_42m4lca', 'template_5rfqb7d', templateParams).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
  };

  export default sendEmail