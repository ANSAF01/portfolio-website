const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formStatus = document.getElementById('form-status');

const validateForm = () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Please fill out all fields.';
    formStatus.classList.add('text-danger');
    return false;
  }

  return { name, email, message };
};
form.addEventListener('submit', (e) => {
  e.preventDefault();
const sendEmail = (templateParams) => {
  emailjs.send('service_qoqhp4d', 'template_jag566i', templateParams)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      formStatus.textContent = 'Message sent successfully!';
      formStatus.classList.add('text-success');
      form.reset();
    }, (err) => {
      console.log('FAILED...', err);
      formStatus.textContent = 'Failed to send message. Please try again.';
      formStatus.classList.add('text-danger');
    });
};


  
  const templateParams = validateForm();
  if (templateParams) {
    sendEmail(templateParams);
  }
});