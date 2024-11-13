
const types = ['video/mp4', 'image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

const isValidTypes = (type) => {
    return types.includes(type);
}

module.exports = {
    isValidTypes
}