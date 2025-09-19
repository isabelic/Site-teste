// Inicializar EmailJS
(function() {
  emailjs.init("yuw1FsmpWsA1ngbo3"); // sua Public Key
})();

const form = document.getElementById("feedbackForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Validação de preenchimento
  if (!email || !message) {
    alert("Por favor, preencha seu e-mail e o feedback.");
    return;
  }

  // Validação de formato do e-mail
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  // --- Enviar para o ADMIN ---
  emailjs.send("service_8jb6pmh", "template_7any66u", {
      email: email,     
      message: message  
    })
    .then(() => {
      console.log("Feedback enviado para o admin!");

      // --- Enviar CONFIRMAÇÃO para o USUÁRIO ---
      emailjs.send("service_8jb6pmh", "template_scybpub", {
          email: email,   
          message: message 
        })
        .then(() => {
          alert("Obrigado pelo seu feedback! Você receberá um email de confirmação.");
          form.reset();
        })
        .catch((error) => {
          alert("Erro ao enviar confirmação, mas o feedback foi recebido.");
          console.error("Erro ao enviar para usuário:", error);
        });

    })
    .catch((error) => {
      alert("Erro ao enviar feedback, tente novamente mais tarde.");
      console.error("Erro ao enviar para admin:", error);
    });

});
