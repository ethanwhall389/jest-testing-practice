function capitalize(str) {
    const split = str.split('');
    split[0] = split[0].toUpperCase();
    return split.join('');
}

module.exports = capitalize;