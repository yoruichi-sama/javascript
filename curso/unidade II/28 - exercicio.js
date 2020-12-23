const relogio = document.querySelector(".relogio");

let segundos = 0;
let timer;

document.addEventListener("click", function (e) {
  const elemento = e.target;

  if (elemento.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    iniciaRelogio();
  }

  if (elemento.classList.contains("pausar")) {
    relogio.classList.add("pausado");
    clearInterval(timer);
  }

  if (elemento.classList.contains("zerar")) {
    segundos = 0;
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    relogio.classList.remove("pausado");
  }
});

function criaTime(seg) {
  const data = new Date(seg * 1000);

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaTime(segundos);
  }, 1000);
}
