function charCount(str) {
    const frequency = {};

    for (let i=0; i<str.length; i++) {
        const char = str[i].toLowerCase();
        /[a-z0-9]/.test(char) && frequency[char] ? frequency[char]++ : frequency[char] = 1;
    }

    return frequency;
}


function ES6charCount(str) {
    const frequency = {};

    for (let char of str) {
        const c = char.toLowerCase();
        /[a-z0-9]/.test(c) && frequency[c] ? frequency[c]++ : frequency[c] = 1;
    }

    return frequency;
}


ES6charCount('This is awesome!');