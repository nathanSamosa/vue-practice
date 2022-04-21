import config from "./config"
const { GRID } = config

export const shuffleArray = arr => {
    let currentIdx = arr.length, randomIdx;

    while (currentIdx !== 0) {
        randomIdx = Math.floor(Math.random() * currentIdx);
        currentIdx--;
        [arr[currentIdx], arr[randomIdx]] = [arr[randomIdx], arr[currentIdx]]
    }

    return arr
}

export const curateArray = (arr, count) => {
    return shuffleArray(arr)
        .map(i => i["word"].toUpperCase())
        .filter(i => i.length <= Math.max( (count * GRID.countSizeRatio), (GRID.minSize - 1) ))
        .slice(0, count)
}