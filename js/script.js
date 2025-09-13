emailjs.init('yuw1FsmpWsA1ngbo3'); // sua Public Key

const form = document.getElementById('feedbackForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!email || !message) {
    alert('Por favor, preencha seu e-mail e o feedback.');
    return;
  }

  emailjs.send('service_8jb6pmh', 'template_scybpub', {
    user_email: email,
    message: message
  })
  .then(() => {
    alert('Obrigado pelo seu feedback!');
    form.reset();
  })
  .catch((error) => {
    alert('Erro ao enviar, tente novamente mais tarde.');
    console.error('EmailJS error:', error);
  });
});
