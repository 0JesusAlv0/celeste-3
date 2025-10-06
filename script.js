const fechaInicio = new Date("2024-11-18T00:00:00");

function actualizarTiempo() {
  const ahora = new Date();
  const diff = ahora - fechaInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("tiempo").innerText = 
    `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos 💕`;
}
setInterval(actualizarTiempo, 1000);
actualizarTiempo();

function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  const corazones = ["❤️","💖","💕","💞","💘"];
  corazon.innerHTML = corazones[Math.floor(Math.random() * corazones.length)];
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = (Math.random() * 20 + 15) + "px";
  corazon.style.animationDuration = (Math.random() * 3 + 3) + "s";
  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 6000);
}
setInterval(crearCorazon, 800);

const musica = document.getElementById("musica");
const musicaBtn = document.getElementById("musicaBtn");

musicaBtn.addEventListener("click", () => {
  if (musica.paused) {
    musica.muted = false;
    musica.play();
    musicaBtn.innerText = "💖 Música Reproduciéndose";
  } else {
    musica.pause();
    musicaBtn.innerText = "🎶 Activar Música";
  }
});

const poemaTexto = `Celeste, mi amor,

Un viernes 15, bajo el cielo que parecía cómplice de nuestro destino,
nos encontramos por primera vez para jugar básquet.
Las risas, los pases y las miradas fueron el inicio
de algo que ninguno de los dos esperaba,
pero que el corazón ya presentía.

Ese día fue diferente, porque desde entonces
supe que en ti había algo especial.
En cada palabra, en cada sonrisa,
me descubrí queriendo estar más tiempo contigo,
compartiendo momentos sencillos
que poco a poco se volvieron inolvidables.

Pasaron apenas unos días
y el 18 de noviembre de 2024 llegó,
como el amanecer más hermoso de mi vida,
pues desde ese instante nuestras almas
decidieron caminar juntas.

Desde entonces, cada día contigo
ha sido un regalo que atesoro,
un poema que no termina,
una melodía que nunca deja de sonar.
Tus abrazos se hicieron mi refugio,
tu sonrisa, mi motor,
y tu amor, la certeza más hermosa
de que encontré a mi persona.

Celeste Faz, eres mi historia más linda,
mi presente más feliz
y mi futuro más brillante.
Prometo amarte siempre,
porque desde aquel viernes 15,
mi vida cambió para siempre,
y todo, absolutamente todo,
se volvió más lindo contigo. 💖`;

let i = 0;
function escribirPoema() {
  if (i < poemaTexto.length) {
    document.getElementById("poema").innerHTML += poemaTexto.charAt(i) === "\n" ? "<br>" : poemaTexto.charAt(i);
    i++;
    setTimeout(escribirPoema, 60);
  }
}
window.onload = escribirPoema;