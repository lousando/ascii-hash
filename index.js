function asciiHash(message = "") {
    let hash = 0;

    for (let i = 0; i < message.length; i++) {
        hash += message.charCodeAt(i);
    }

    return String(hash);
}

const cache = new Map();

function asciiHashMem(message = "") {
    if (cache.has(message)) {
        return cache.get(message);
    }

    const hash = asciiHash(message);
    cache.set(message, hash);

    return hash;
}

module.exports = {
    asciiHash,
    asciiHashMem
}
