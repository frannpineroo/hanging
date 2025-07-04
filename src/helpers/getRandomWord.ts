let words: string[] = [
    'COMPUTADORA',
    'AVION',
    'CALEFACTOR',
    'PELICULA',
    'ZAPATILLAS',
    'FUTBOL',
    'CARGADOR',
    'ENFERMERIA',
    'CELULAR',
    'VEHICULO',
    'VETERINARIA'
];

export function getRandomWord(): string {
    const randromIndex = Math.floor( Math.random() * words.length );
    return words[randromIndex];
}