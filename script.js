const btnSortear = document.getElementById("sortear");
const resultado = document.getElementById("resultado");
const mensagem = document.getElementById("mensagem");

btnSortear.addEventListener("click", () => {
  const min = parseInt(document.getElementById("minimo").value);
  const max = parseInt(document.getElementById("maximo").value);

  resultado.innerHTML = "";
  mensagem.textContent = "";

  if (isNaN(min) || isNaN(max)) {
    mensagem.textContent = "Preencha os campos mínimo e máximo.";
    return;
  }

  if (min >= max) {
    mensagem.textContent = "O valor máximo deve ser maior que o mínimo.";
    return;
  }

  let contador = 0;
  const intervalo = setInterval(() => {
    const numeroTemp = Math.floor(Math.random() * (max - min + 1)) + min;
    resultado.innerHTML = "";

    const div = document.createElement("div");
    div.className = "numero";
    div.textContent = numeroTemp;
    resultado.appendChild(div);

    contador++;
    if (contador >= 20) {
      clearInterval(intervalo);
}
  }, 100); // muda o número a cada 100ms por 2 segundos
});