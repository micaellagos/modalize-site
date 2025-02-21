function voltarParaSite(){
    window.location.href='/index.html';
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const whatsapp = document.getElementById("telefone").value;
    if (whatsapp.length < 8) {
        alert("O campo Whatsapp deve ter pelo menos 8 dígitos.");
        return false; 
    }
        // Capturar os valores do formulário
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const empresa = document.getElementById("empresa").value;
    const email = document.getElementById("email").value;
    const codigo = document.getElementById("codigo").value || "Não informado";

    // Capturar os serviços selecionados
    const siteWeb = document.getElementById("siteWeb").checked ? "Site Web" : "";
    const appMobile = document.getElementById("appMobile").checked ? "App Mobile" : "";
    const servicos = [siteWeb, appMobile].filter(Boolean).join(", ") || "Nenhum serviço selecionado";

    // Configurar os parâmetros para o EmailJS
    const templateParams = {
        nome: nome,
        sobrenome: sobrenome,
        empresa: empresa,
        email: email,
        whatsapp: whatsapp,
        servicos: servicos,
        codigo: codigo
    };

    // Enviar e-mail via EmailJS
    emailjs.send("modalizeSID", "modalizeTID", templateParams)
        .then(function(response) {
            window.location.href='../obrigado/obrigado.html'
            document.querySelector("form").reset();
        }, function(error) {
            alert("Erro ao enviar o e-mail: " + JSON.stringify(error));
        });
});
