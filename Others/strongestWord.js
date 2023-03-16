function findStrongestWord(sentence) {
    const words = sentence.split(" ");
    let strongestWord = "";
    let maxHMSPL = 0;

    for (const word of words) {
        const hmsplCount = countHMSPL(word);
        if (hmsplCount > maxHMSPL || (hmsplCount === maxHMSPL && word < strongestWord)) {
            strongestWord = word;
            maxHMSPL = hmsplCount;
        }
    }
    return strongestWord;
}

function countHMSPL(word) {
    const hmsplChars = ["h", "m", "s", "p", "l"];
    let count = 0;
    for (const char of word) {
        if (hmsplChars.includes(char)) {
            count++;
        }
    }
    return count;
}

const sentence = "Helping businesses enhance performance, deliver better service, improve customer experience, and react faster to market demands";
const strongestWord = findStrongestWord(sentence);
console.log(strongestWord);