const iniciarBtn = document.getElementById("iniciar");
const verRolBtn = document.getElementById("verRol");
const configuracion = document.getElementById("configuracion");
const juego = document.getElementById("juego");
const tituloJugador = document.getElementById("titulo-jugador");
const mensaje = document.getElementById("mensaje");

let palabra = "";
let impostores = [];
let jugadorActual = 1;
let totalJugadores = 0;

// Temas de respaldo
const palabrasLocales = {
  comida: ["Pizza", "Taco", "Hamburguesa", "Pasta", "Arepa", "Sushi"],
  animales: ["Perro", "Gato", "Elefante", "Tigre", "Caballo", "Delfín"],
  famosos: ["Messi", "Shakira", "Bad Bunny", "Taylor Swift", "Elon Musk"],
  objetos: ["Teléfono", "Mesa", "Lámpara", "Computador", "Bicicleta"],
  deportes: ["Fútbol", "Baloncesto", "Natación", "Tenis", "Boxeo"],
  pais: ["Colombia", "España", "México", "Japón", "Brasil"],
  profesiones: ["Doctor", "Ingeniero", "Abogado", "Chef", "Profesor"],
  peliculas: ["Avatar", "Titanic", "Inception", "Avengers", "Matrix"],
  videojuegos: ["Minecraft", "Among Us", "GTA", "Fortnite", "Zelda"]
};

// Obtener palabra desde API o local
async function obtenerPalabra(tema) {
  try {
    const res = await fetch("https://random-word-api.herokuapp.com/word?number=1");
    const data = await res.json();
    return data[0];
  } catch {
    // Si falla, toma una palabra local
    if (tema === "todos") {
      const all = Object.values(palabrasLocales).flat();
      return all[Math.floor(Math.random() * all.length)];
    } else {
      const lista = palabrasLocales[tema] || ["Impostor"];
      return lista[Math.floor(Math.random() * lista.length)];
    }
  }
}

iniciarBtn.addEventListener("click", async () => {
  const tema = document.getElementById("tema").value;
  totalJugadores = parseInt(document.getElementById("jugadores").value);
  const numImpostores = parseInt(document.getElementById("impostores").value);

  if (numImpostores >= totalJugadores) {
    alert("Debe haber al menos un jugador que no sea impostor.");
    return;
  }

  palabra = await obtenerPalabra(tema);

  // Generar impostores aleatoriamente
  impostores = [];
  while (impostores.length < numImpostores) {
    let imp = Math.floor(Math.random() * totalJugadores) + 1;
    if (!impostores.includes(imp)) impostores.push(imp);
  }

  configuracion.classList.add("hidden");
  juego.classList.remove("hidden");
  tituloJugador.textContent = `Jugador 1, presiona para ver tu rol`;
  mensaje.textContent = "";
});

verRolBtn.addEventListener("click", () => {
  if (jugadorActual > totalJugadores) {
    mensaje.textContent = "Todos los jugadores ya vieron su rol. ¡A jugar!";
    verRolBtn.disabled = true;
    return;
  }

  if (impostores.includes(jugadorActual)) {
    alert(`Jugador ${jugadorActual}: ¡Eres el IMPOSTOR! 🤫`);
  } else {
    alert(`Jugador ${jugadorActual}: Tu palabra es "${palabra}"`);
  }

  jugadorActual++;
  if (jugadorActual <= totalJugadores) {
    tituloJugador.textContent = `Jugador ${jugadorActual}, presiona para ver tu rol`;
  } else {
    tituloJugador.textContent = "Todos los roles asignados ✅";
  }
});
