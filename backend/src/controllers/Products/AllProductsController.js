module.exports = (request, response) => {
    response.json([
        {
            product: 10
        },
        {
            users: 5
        }
    ]);
}