// Substitua 'your_user_id' pelo User ID real fornecido pelo EmailJS
emailjs.init("5nqxPqH7mM6AafoP5");

document.getElementById('fomularioContato').addEventListener('submit', function (event) {
    event.preventDefault(); // Isso evita o comportamento de envio padrão do formulário

    // Aqui 'meuFormulario' é o ID do seu formulário
    // 'seu_template_id' é o ID do modelo de e-mail que você criou no EmailJS
    emailjs.sendForm('service_upf39hh', 'template_6o43cqv', this)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            window.location.href = "index.html";
        }, function (error) {
            console.log('FAILED...', error);
        });
});
