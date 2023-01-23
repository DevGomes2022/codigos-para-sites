const speechButton = document.getElementById('speak-button');
const speechOutput = document.getElementById('speech-output');

// Criando um reconhecimento de fala
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;

// função para iniciar a escuta
speechButton.addEventListener('click', () => {
  recognition.start();
});

// função para tratar a saída de fala
recognition.addEventListener('result', (e) => {
  speechOutput.textContent = e.results[0][0].transcript;
});