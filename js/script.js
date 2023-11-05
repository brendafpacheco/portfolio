// Substitua 'your_user_id' pelo User ID real fornecido pelo EmailJS
emailjs.init("5nqxPqH7mM6AafoP5");

const notificacao = document.getElementById('notificacao');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(notificacao);

document.getElementById('fomularioContato').addEventListener('submit', function (event) {
    event.preventDefault(); // Isso evita o comportamento de envio padrão do formulário

    // Aqui 'meuFormulario' é o ID do seu formulário
    // 'seu_template_id' é o ID do modelo de e-mail que você criou no EmailJS
    emailjs.sendForm('service_upf39hh', 'template_6o43cqv', this)
        .then(function (response) {
            document.getElementById('mensagemToast').textContent = "Sua mensagem foi enviada e será retornada em breve.";
            toastBootstrap.show();
        }, function (error) {
            document.getElementById('mensagemToast').textContent = "Erro ao enviar a sua mensagem. Entre em contato pelo telefone ou e-mail informados ao lado do formulário.";
            toastBootstrap.show();
        });
    
    document.getElementById('fomularioContato').reset();
});
