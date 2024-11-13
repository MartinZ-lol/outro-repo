const {isValidTypes} = require('../../src/utils/images-types');

describe("ultils/image-type", () => {
    it("deve retornar true para imagens png", () => {
        let result = isValidTypes('image/png')
    })
})