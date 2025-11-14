// 🌍 Temas locales para modo sin conexión
const temasLocales = {
  "Animales": ["Perro", "Gato", "Elefante", "Tigre", "Jirafa", "León", "Delfín", "Caballo", "Conejo", "Zorro", "Oso", "Panda", "Cebra", "Lobo", "Serpiente"],
  
  "Comida": ["Pizza", "Hamburguesa", "Sushi", "Taco", "Arepa", "Pasta", "Empanada", "Hot Dog", "Ceviche", "Pan", "Arroz", "Pollo", "Helado", "Tamal", "Chorizo"],
  
  "Países": ["Colombia", "México", "Japón", "Italia", "Brasil", "Argentina", "España", "Canadá", "Chile", "Perú", "Francia", "Alemania", "China", "Egipto", "Australia"],
  
  "Objetos": ["Teléfono", "Silla", "Libro", "Reloj", "Computador", "Lápiz", "Mesa", "Cuchara", "Vaso", "Cama", "Puerta", "Lámpara", "Bolso", "Gafas", "Sombrero"],
  
  "Colores": ["Rojo", "Azul", "Verde", "Amarillo", "Negro", "Blanco", "Morado", "Naranja", "Rosa", "Gris", "Café", "Turquesa", "Dorado", "Plateado", "Beige"],
  
  "Frutas": ["Manzana", "Banano", "Fresa", "Mango", "Piña", "Naranja", "Melón", "Sandía", "Uva", "Cereza", "Papaya", "Kiwi", "Limón", "Guayaba", "Durazno"],
  
  "Verduras": ["Zanahoria", "Lechuga", "Tomate", "Cebolla", "Papa", "Espinaca", "Pepino", "Maíz", "Brócoli", "Ajo", "Pimentón", "Apio", "Repollo", "Calabaza", "Berenjena"],
  
  "Deportes": ["Fútbol", "Baloncesto", "Tenis", "Natación", "Ciclismo", "Boxeo", "Atletismo", "Voleibol", "Golf", "Béisbol", "Surf", "Esgrima", "Patinaje", "Rugby", "Escalada"],
  
  "Profesiones": ["Doctor", "Maestro", "Ingeniero", "Abogado", "Arquitecto", "Policía", "Bombero", "Chef", "Mecánico", "Programador", "Diseñador", "Enfermero", "Piloto", "Cantante", "Actor"],
  
  "Medios de transporte": ["Carro", "Moto", "Bicicleta", "Avión", "Barco", "Tren", "Autobús", "Helicóptero", "Camión", "Metro", "Patineta", "Submarino", "Tractor", "Taxi", "Globo aerostático"],
  
  "Instrumentos musicales": ["Guitarra", "Piano", "Batería", "Violín", "Trompeta", "Flauta", "Saxófono", "Arpa", "Ukelele", "Tambor", "Bajo", "Clarinete", "Maracas", "Órgano", "Xilófono"],
  
  "Emociones": ["Alegría", "Tristeza", "Miedo", "Enojo", "Sorpresa", "Amor", "Vergüenza", "Orgullo", "Calma", "Ansiedad", "Esperanza", "Celos", "Culpa", "Paz", "Curiosidad"],
  
  "Partes del cuerpo": ["Cabeza", "Brazo", "Pierna", "Mano", "Pie", "Ojo", "Nariz", "Boca", "Oreja", "Rodilla", "Codo", "Cuello", "Espalda", "Corazón", "Estómago"],
  
  "Lugares": ["Escuela", "Parque", "Playa", "Montaña", "Museo", "Hospital", "Cine", "Teatro", "Restaurante", "Biblioteca", "Casa", "Oficina", "Iglesia", "Estadio", "Hotel"],
  
  "Tecnología": ["Computador", "Tablet", "Celular", "Internet", "Robot", "Impresora", "App", "Red social", "Correo electrónico", "Software", "Base de datos", "Servidor", "Teclado", "Mouse", "Pantalla"],
  
  "Películas": ["Titanic", "Avatar", "Harry Potter", "Spider-Man", "El Rey León", "Frozen", "Jurassic Park", "Avengers", "Matrix", "Toy Story", "Shrek", "Star Wars", "Up", "Coco", "Encanto"],
  
  "Series": ["Friends", "The Office", "Stranger Things", "Breaking Bad", "Game of Thrones", "The Simpsons", "Naruto", "One Piece", "Rick and Morty", "Vikings", "Peaky Blinders", "Loki", "The Witcher", "Lucifer", "Dark"],
  
  "Videojuegos": ["Minecraft", "Fortnite", "Mario", "Zelda", "Call of Duty", "GTA", "Among Us", "Valorant", "Pokémon", "League of Legends", "FIFA", "Roblox", "Tetris", "Overwatch", "Sonic"],
  
  "Planetas": ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno", "Plutón", "Luna", "Sol"],
  
  "Flores": ["Rosa", "Girasol", "Tulipán", "Lirio", "Margarita", "Clavel", "Orquídea", "Jazmín", "Hortensia", "Dalia", "Violeta", "Amapola", "Cerezo", "Lavanda", "Gardenia"],
  
  "Vehículos": ["Carro", "Camión", "Moto", "Avión", "Barco", "Tren", "Bus", "Tractor", "Helicóptero", "Bicicleta", "Patineta", "Scooter", "Submarino", "Lancha", "Taxi"],
  
  "Ropa": ["Camisa", "Pantalón", "Falda", "Zapatos", "Sombrero", "Chaqueta", "Vestido", "Guantes", "Bufanda", "Gafas", "Medias", "Corbata", "Traje", "Pijama", "Cinturón"],
  
  "Naturaleza": ["Árbol", "Río", "Montaña", "Playa", "Bosque", "Desierto", "Lago", "Volcán", "Cueva", "Nube", "Roca", "Flor", "Hielo", "Cascada", "Valle"],
  
  "Herramientas": ["Martillo", "Destornillador", "Llave inglesa", "Sierra", "Taladro", "Cinta métrica", "Clavo", "Tornillo", "Alicate", "Nivel", "Brocha", "Pala", "Escuadra", "Lima", "Cincel"],
  
  "Medios de comunicación": ["Periódico", "Radio", "Televisión", "Internet", "Podcast", "Correo", "Mensaje", "Noticia", "Entrevista", "Revista", "Red social"]
};

// 🧩 Referencias del DOM
const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaConfig = document.getElementById("pantalla-config");
const pantallaTodosTemas = document.getElementById("pantalla-todos-temas");
const resultado = document.getElementById("resultado");
const pantallaRuleta = document.getElementById("pantalla-ruleta");
const temaSelect = document.getElementById("tema");
const jugarBtn = document.getElementById("jugarBtn");
const siguienteBtn = document.getElementById("siguienteBtn");
const mensaje = document.getElementById("mensaje");
const btnVerTodos = document.getElementById("btnVerTodos");
const btnVolverConfig = document.getElementById("btnVolverConfig");
const listaTemas = document.getElementById("lista-temas");
const ruleta = document.getElementById("ruleta");
const jugadorSeleccionado = document.getElementById("jugador-seleccionado");
const btnVolverInicio = document.getElementById("btnVolverInicio");
const seleccionTema = document.getElementById("seleccion-tema");
const opcionesTema = document.querySelectorAll('input[name="tipoTema"]');

// Variables globales
let palabras = [];
let jugadorActual = 0;
let totalJugadores = 0;
let temaSeleccionado = "";

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

// 🧩 Mostrar todos los temas en la pantalla especial
function mostrarTodosTemas() {
  listaTemas.innerHTML = "";
  Object.keys(temasLocales).forEach(tema => {
    const temaItem = document.createElement("div");
    temaItem.className = "tema-item";
    temaItem.textContent = tema;
    temaItem.addEventListener("click", () => {
      temaSelect.value = tema;
      pantallaTodosTemas.classList.add("hidden");
      pantallaConfig.classList.remove("hidden");
    });
    listaTemas.appendChild(temaItem);
  });
}

// 🔥 Navegación entre pantallas
document.getElementById("btnComenzar").addEventListener("click", () => {
  pantallaInicio.classList.add("hidden");
  pantallaConfig.classList.remove("hidden");
});

btnVerTodos.addEventListener("click", () => {
  pantallaConfig.classList.add("hidden");
  pantallaTodosTemas.classList.remove("hidden");
  mostrarTodosTemas();
});

btnVolverConfig.addEventListener("click", () => {
  pantallaTodosTemas.classList.add("hidden");
  pantallaConfig.classList.remove("hidden");
});

btnVolverInicio.addEventListener("click", () => {
  pantallaRuleta.classList.add("hidden");
  pantallaInicio.classList.remove("hidden");
});

// 🎲 Manejar cambio entre tema seleccionado y aleatorio
opcionesTema.forEach(opcion => {
  opcion.addEventListener("change", (e) => {
    if (e.target.value === "aleatorio") {
      seleccionTema.style.display = "none";
    } else {
      seleccionTema.style.display = "block";
    }
  });
});

// 🕹️ Lógica del juego
jugarBtn.addEventListener("click", () => {
  const tipoTema = document.querySelector('input[name="tipoTema"]:checked').value;
  const jugadores = parseInt(document.getElementById("jugadores").value);
  const impostores = parseInt(document.getElementById("impostores").value);

  totalJugadores = jugadores;
  jugadorActual = 0;

  // Determinar el tema a usar
  if (tipoTema === "aleatorio") {
    // Seleccionar un tema aleatorio
    const temas = Object.keys(temasLocales);
    temaSeleccionado = temas[Math.floor(Math.random() * temas.length)];
  } else {
    // Usar el tema seleccionado
    temaSeleccionado = temaSelect.value;
  }

  const palabrasTema = temasLocales[temaSeleccionado];
  const palabraElegida = palabrasTema[Math.floor(Math.random() * palabrasTema.length)];
  palabras = Array(jugadores).fill(palabraElegida);

  for (let i = 0; i < impostores; i++) {
    const idx = Math.floor(Math.random() * jugadores);
    palabras[idx] = "IMPOSTOR";
  }

  pantallaConfig.classList.add("hidden");
  resultado.classList.remove("hidden");
  
  // Si es tema aleatorio, mostrar indicador especial
  if (tipoTema === "aleatorio") {
    const indicador = document.createElement("div");
    indicador.className = "tema-aleatorio-indicador";
    indicador.textContent = "🎲 ¡Categoría secreta seleccionada! 🎲";
    resultado.insertBefore(indicador, resultado.firstChild);
  }
  
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
    // Todos han visto sus palabras, mostrar la ruleta
    resultado.classList.add("hidden");
    pantallaRuleta.classList.remove("hidden");
    girarRuleta();
  }
}

// 🎡 Lógica de la ruleta
function girarRuleta() {
  // Reiniciar la ruleta
  ruleta.style.transform = "rotate(0deg)";
  jugadorSeleccionado.textContent = "";
  
  // Calcular un giro aleatorio (múltiplo de 360 + un giro extra)
  const giroExtra = Math.floor(Math.random() * 360) + 360 * 5; // 5 vueltas completas + extra
  ruleta.style.transform = `rotate(${giroExtra}deg)`;
  
  // Calcular qué jugador fue seleccionado
  setTimeout(() => {
    const anguloPorJugador = 360 / totalJugadores;
    const anguloFinal = giroExtra % 360;
    const jugadorIndex = Math.floor((360 - anguloFinal) / anguloPorJugador) % totalJugadores;
    
    jugadorSeleccionado.textContent = `¡El jugador ${jugadorIndex + 1} empieza!`;
  }, 4000); // Esperar a que termine la animación
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
