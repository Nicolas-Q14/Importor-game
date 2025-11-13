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
  
  "Instrumentos musicales": ["Guitarra", "Piano", "Batería", "Violín", "Trompeta", "Flauta", "Saxofón", "Arpa", "Ukelele", "Tambor", "Bajo", "Clarinete", "Maracas", "Órgano", "Xilófono"],
  
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
