const mensagens = [
    "Você ilumina meus dias. ☀️",
    "Meu coração bate mais forte por você. ❤️",
    "Cada momento ao seu lado é especial. 💕",
    "Você é meu motivo para sorrir todos os dias. 😊",
    "Te amo mais do que palavras podem dizer. 💖"
];

function mostrarMensagem() {
    const aleatoria = Math.floor(Math.random() * mensagens.length);
    document.getElementById("mensagem").textContent = mensagens[aleatoria];
}