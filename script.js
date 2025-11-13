// 🌍 Temas locales para modo sin conexión
const temasLocales = {
  "Animales": ["Perro", "Gato", "Elefante", "Tigre", "Jirafa"],
  "Comida": ["Pizza", "Hamburguesa", "Sushi", "Taco", "Arepa"],
  "Países": ["Colombia", "México", "Japón", "Italia", "Brasil"],
  "Objetos": ["Teléfono", "Silla", "Libro", "Reloj", "Computador"],
  "Colores": ["Rojo", "Azul", "Verde", "Amarillo", "Negro"]
};

// 🧩 Referencias del DOM
const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaConfig = document.getElementById("pantalla-config");
const resultado = document.getElementById("resultado");
const temaSelect = document.getElementById("tema");
const jugarBtn = document.getElementById("jugarBtn");
const siguienteBtn = document.getElementById("siguienteBtn");
const mensaje = document.getElementById("mensaje");

// 🌐 Cargar temas extra desde API si hay Internet
async function cargarTemasAPI() {
  try {
    const response = await fetch("https://api.datamuse.com/words?ml=fun");
    if (!response.ok) throw new Error("Sin conexión");
    const data = await response.json();

    const palabrasExtra = data.slice(0, 8).map(obj => obj.word);
    temasLocales["Extra API"] = palabrasExtra;
    console.log("✅ Temas extra cargados desde Internet:", palabrasExtra);
  } catch {
    console.warn("⚠️ Sin Internet: solo temas locales disponibles");
  }
}

// 🧩 Mostrar los temas disponibles
function actualizarTemas() {
  temaSelect.innerHTML = "";
  Object.keys(temasLocales).forEach(t => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    temaSelect.appendChild(opt);
  });
}

// 🔥 Navegación entre pantallas
document.getElementById("btnComenzar").addEventListener("click", () => {
  pantallaInicio.classList.add("hidden");
  pantallaConfig.classList.remove("hidden");
});

// 🕹️ Lógica del juego
let palabras = [];
let jugadorActual = 0;
let totalJugadores = 0;

jugarBtn.addEventListener("click", () => {
  const tema = temaSelect.value;
  const jugadores = parseInt(document.getElementById("jugadores").value);
  const impostores = parseInt(document.getElementById("impostores").value);

  totalJugadores = jugadores;
  jugadorActual = 0;

  const palabrasTema = temasLocales[tema];
  const palabraElegida = palabrasTema[Math.floor(Math.random() * palabrasTema.length)];
  palabras = Array(jugadores).fill(palabraElegida);

  for (let i = 0; i < impostores; i++) {
    const idx = Math.floor(Math.random() * jugadores);
    palabras[idx] = "IMPOSTOR";
  }

  pantallaConfig.classList.add("hidden");
  resultado.classList.remove("hidden");
  mostrarJugador();
});

function mostrarJugador() {
  if (jugadorActual < totalJugadores) {
    mensaje.textContent = `Jugador ${jugadorActual + 1}: toca para ver tu palabra`;
    siguienteBtn.textContent = "Mostrar palabra";
    siguienteBtn.onclick = () => {
      mensaje.textContent =
        palabras[jugadorActual] === "IMPOSTOR"
          ? "Eres el IMPOSTOR 😈"
          : `Tu palabra es: ${palabras[jugadorActual]}`;
      siguienteBtn.textContent = "Siguiente";
      siguienteBtn.onclick = () => {
        jugadorActual++;
        mostrarJugador();
      };
    };
  } else {
    mensaje.textContent = "¡Todos listos! A descubrir al impostor 👀";
    siguienteBtn.classList.add("hidden");
  }
}

// 🌌 Fondo animado (estilo espacial)
const canvas = document.getElementById("fondoAnimado");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let estrellas = [];

for (let i = 0; i < 100; i++) {
  estrellas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    d: Math.random() * 1
  });
}

function animarFondo() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  estrellas.forEach(e => {
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
    ctx.fill();
    e.y += e.d;
    if (e.y > canvas.height) e.y = 0;
  });
  requestAnimationFrame(animarFondo);
}
animarFondo();

// 🚀 Inicializar
(async () => {
  await cargarTemasAPI();
  actualizarTemas();
})();
