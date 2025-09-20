



















<script>
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const loginLinks = document.querySelector(".Menu-login");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      loginLinks.classList.toggle("active");
    });
  });
</script>










//Esse é o atendimento que avisei no grupo, mas não consegui vincular com o html
function abrirChat() {
  const chatbox = document.getElementById("chatbox");
  if (chatbox.style.display === "flex") {
    chatbox.style.display = "none";
  } else {
    chatbox.style.display = "flex";
  }
}


function fecharChat() {
  document.getElementById("chatbox").style.display = "none";
}

function selecionarPergunta(opcao) {
  const chatBody = document.getElementById("chat-body");
  let pergunta = "";
  let resposta = "";

  switch(opcao) {
    case 1:
      pergunta = "O que é a NextRoute?";
      resposta = "A NextRoute é uma empresa especializada em gestão de turismo, transformando viagens em experiências únicas.";
      break;
    case 2:
      pergunta = "Como funciona o planejamento?";
      resposta = "Você escolhe origem, destino e data, e nós cuidamos do resto com serviço personalizado.";
      break;
    case 3:
      pergunta = "A NextRoute tem aplicativo?";
      resposta = "Não. No momento a NextRoute somente está disponível em sua versão de site. Aguarde por novas atualizações! 😀";
      break;
  }

  const userMsg = document.createElement("div");
  userMsg.className = "mensagem user";
  userMsg.innerText = pergunta;
  chatBody.appendChild(userMsg);

  const botoes = document.querySelector(".perguntas");
  if (botoes) botoes.remove();

  // Adiciona bolha de digitação
  const digitando = document.createElement("div");
  digitando.className = "mensagem bot digitando";
  digitando.innerHTML = `
    <div class="bolinha-avatar"></div>
    <div class="texto-bot">
      <span class="pontos-digitando">
        <span>.</span><span>.</span><span>.</span>
      </span>
    </div>
  `;
  chatBody.appendChild(digitando);
  chatBody.scrollTop = chatBody.scrollHeight;

  // Remove bolha e mostra resposta após 5 segundos
  setTimeout(() => {
    digitando.remove();

    const botIntro = document.createElement("div");
    botIntro.className = "mensagem bot";
    botIntro.innerHTML = `
      <div class="bolinha-avatar"></div>
      <div class="texto-bot">Olá! Sou o Jonas, seu assistente da NextRoute. 😊</div>
    `;
    chatBody.appendChild(botIntro);

    const botResposta = document.createElement("div");
    botResposta.className = "mensagem bot";
    botResposta.innerHTML = `
      <div class="bolinha-avatar"></div>
      <div class="texto-bot">${resposta}</div>
    `;
    chatBody.appendChild(botResposta);

    chatBody.scrollTop = chatBody.scrollHeight;
  }, 2000);
}

function enviarMensagem() {
  const input = document.getElementById("mensagemUsuario");
  const texto = input.value.trim();
  if (texto === "") return;

  const chatBody = document.getElementById("chat-body");

  const userMsg = document.createElement("div");
  userMsg.className = "mensagem user";
  userMsg.innerText = texto;
  chatBody.appendChild(userMsg);

  input.value = "";

  const digitando = document.createElement("div");
  digitando.className = "mensagem bot digitando";
  digitando.innerHTML = `
    <div class="bolinha-avatar"></div>
    <div class="texto-bot">
      <span class="pontos-digitando">
        <span>.</span><span>.</span><span>.</span>
      </span>
    </div>
  `;
  chatBody.appendChild(digitando);
  chatBody.scrollTop = chatBody.scrollHeight;

  setTimeout(() => {
    digitando.remove();

    const botResposta = document.createElement("div");
    botResposta.className = "mensagem bot";
    botResposta.innerHTML = `
      <div class="bolinha-avatar"></div>
      <div class="texto-bot">Agradecemos pelo contato! Seu atendente irá te responder em breve.</div>
    `;
    chatBody.appendChild(botResposta);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 1000);
}


function limparChat() {
  const chatBody = document.getElementById("chat-body");
  chatBody.innerHTML = `
    <div class="perguntas">
      <button onclick="selecionarPergunta(1)">O que é a NextRoute?</button>
      <button onclick="selecionarPergunta(2)">Como funciona o planejamento?</button>
      <button onclick="selecionarPergunta(3)">A NextRoute tem aplicativo?</button>
    </div>
  `;
}



document.getElementById("mensagemUsuario").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    enviarMensagem();
  }
});

