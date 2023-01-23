var input = document.getElementById("chatbot-input");
var submit = document.getElementById("chatbot-submit");
var messages = document.getElementById("chatbot-messages");

submit.addEventListener("click", function() {
  var message = input.value;
  input.value = "";
  messages.innerHTML += "<div>Você: " + message + "</div>";
  if (message.toLowerCase() === "diana") {
    messages.innerHTML += "<div>Diana: Olá senhor! Em que posso te ajudar?</div>";
  }

  if (message.toLowerCase() === "ativar modo dark") {
    messages.innerHTML += "<div>Diana: Sim senhor!</div><div> Modo dark ativado!</div>"
    // obtém o elemento body
    var body = document.getElementsByTagName("body")[0];
    if (message.toLowerCase() === "ativar modo dark") {
        // muda a cor de fundo do body para a cor gerada
        body.style.backgroundColor = "black";
    }
  }

  if (message.toLowerCase() === "ativar modo white") {
    messages.innerHTML += "<div>Diana: Sim senhor!</div><div> Modo white ativado!</div>"
    // obtém o elemento body
    var body = document.getElementsByTagName("body")[0];
    if (message.toLowerCase() === "ativar modo white") {
        // muda a cor de fundo do body para a cor gerada
        body.style.backgroundColor = "white";
    }
  }
  if (message.toLowerCase() === "tocar set dos casados") {
    messages.innerHTML += "<div>Diana: Sim senhor!</div><div> Tocando set dos casados!</div> <style> #setdoscasados{display:block}</style>"
    }
  if (message.toLowerCase() === "tocar dollar") {
    messages.innerHTML += "<div>Diana: Sim senhor!</div><div> Tocando dollar!</div> <style> #dollar{display:block}</style>"
    }
  if (message.toLowerCase() === "tocar quanto que tu cobra pra sair da minha cabeça") {
    messages.innerHTML += "<div>Diana: Sim senhor!</div><div> Tocando quanto que tu cobra pra sair da minha cabeça!</div> <style> #quantoquetucobra{display:block}</style>"
    }
  if (message.toLowerCase() === "tocar vizinha chata") {
    messages.innerHTML += "<div>Diana: Sim senhor!</div><div> Tocando vizinha chata!</div> <style> #vizinhachata{display:block}</style>"
    }
  if (message.toLowerCase() === "tocar meca cereja") {
    messages.innerHTML += "<div>Diana: Sim senhor!</div><div> Tocando meca cereja!</div> <style> #mecacereja{display:block}</style>"
    }
  if (message.toLowerCase() === "tocar fim de semana no rio") {
    messages.innerHTML += "<div>Diana: Sim senhor!</div><div> Tocando fim de semana no rio!</div> <style> #fimdesemananorio{display:block}</style>"
    }
  if (message.toLowerCase() === "tocar kallidade") {
    messages.innerHTML += "<div>Diana: Sim senhor!</div><div> Tocando kallidade!</div> <style> #kallidade{display:block}</style>"
    }
  if (message.toLowerCase() === "tocar maturidade") {
    messages.innerHTML += "<div>Diana: Sim senhor!</div><div> Tocando maturidade!</div> <style> #maturidade{display:block}</style>"
    }
  });