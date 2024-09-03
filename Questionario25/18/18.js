// Implemente um código que atualiza o texto de um elemento HTML com uma mensagem que muda a
// cada 4 segundos.
let text = document.getElementById("texto");
let i = 0;
const frases = [
  "A vida é o que acontece quando você está ocupado fazendo outros planos.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
  "A vida é realmente simples, mas insistes em torná-la complicada.",
  "A maior glória em viver não está em nunca cair, mas em nos levantar a cada queda.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Você não precisa ser ótimo para começar, mas precisa começar para ser ótimo.",
  "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
  "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
  "Não conte os dias, faça os dias contarem.",
];

setInterval(() => {
  text.innerText = frases[i];
  i = (i + 1) % frases.length;
}, 4000);
