/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let j = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            j = i;
            break;
        }
    }

    if ( j === 0) {
        return word;
    }
    let newString = ""
    for (let i = j; i >=0 ; i--) {
        newString += word[i];
    }
    console.log(j, newString);
    for(let i = j + 1; i < word.length; i++) {
        newString += word[i];
    }
    return newString;
};


console.log(reversePrefix("abcdefd", "d"));