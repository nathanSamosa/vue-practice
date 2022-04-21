const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const directions = [
    { x: 0, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 0, y: 1 },
    { x: -1, y: 1 },
    { x: -1, y: 0 },
    { x: -1, y: -1 }
]

export default {
    methods: {
        randomLetter() {
            return alphabet[Math.floor(Math.random() * alphabet.length)]
        },
        randomInt(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        },
        randomDir() {
            return directions[Math.floor(Math.random() * directions.length)]
        },
    }
}