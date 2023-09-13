// Definir las rutas y la cantidad de tiquetes vendidos diariamente en cada una
//• Medellín - Miami
//•Medellin - Bogota - Roma
//•Medellin - Panama - Los angeles
//•Medellin - Bogota - Madrid
//•Medellin - Miami - Toronto
//•Medellin - Buenos
let cont1 = 0
let cont2 = 0
let cont3 = 0
let cont4 = 0
let cont5 = 0
let cont6 = 0


const rutas = [
    { ruta: 'Medellín - Miami', tiquetesDiarios: 40 },
    { ruta: 'Medellín - Bogotá - Roma', tiquetesDiarios: 60 },
    { ruta: 'Medellín - Panamá - Los Ángeles', tiquetesDiarios: 30 },
    { ruta: 'Medellín - Bogotá - Madrid', tiquetesDiarios: 38 },
    { ruta: 'Medellín - Miami - Toronto', tiquetesDiarios: 12 },
    { ruta: 'Medellín - Buenos Aires', tiquetesDiarios: 20 },
];



const opcion = parseInt(prompt("Ingrese la cantidad de tiquetes que desee comprar"));

switch (opcion) {
    case 1:
        if (cont1 < rutas[0].tiquetesDiarios) {
            // Verificar si hay tiquetes disponibles para la ruta 'Medellín - Miami'
            console.log("Has seleccionado comprar el tiquete de Medellín - Miami.");
            // Aquí puedes agregar la lógica para realizar la compra del tiquete.
            // Por ejemplo, podrías decrementar la cantidad de tiquetes disponibles:
            cont1++;
            console.log(`Tiquetes disponibles restantes para Medellín - Miami: ${rutas[0].tiquetesDiarios - cont1}`);
        } else {
            console.log("Lo sentimos, no hay tiquetes disponibles para la ruta 'Medellín - Miami'.");
        } break
        default:
            console.log("Opción no válida. Por favor, ingrese una cantidad válida de tiquetes.");
    }