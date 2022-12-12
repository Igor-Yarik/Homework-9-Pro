const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let newCharacters = "";

    do {
        newCharacters = newCharacters + characters[Math.floor(Math.random() * characters.length)];
    } while (newCharacters.length < length);

    return newCharacters;
}

const key = generateKey(16, characters);
console.log(key);