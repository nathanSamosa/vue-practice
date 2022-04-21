export const shuffleArray = (arr) => {
    const array = [...arr]
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

export const compareValues = (x, y) => {
    if (x === y) return 'tie';
    return x > y ? 'lower' : 'higher'
}