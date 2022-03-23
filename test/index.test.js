const { asciiHash, asciiHashMem } = require("../index");

describe("ASCII Hash", function () {

    it("Can create consistent hashes", () => {
        expect(asciiHash("hello world!")).toStrictEqual("1149");
        expect(asciiHash("Hello World!")).toStrictEqual("1085");
    });

    it("Can return consistent hashes from memory.", () => {
        const message = "The quick brown fox."

        expect(asciiHashMem(message)).toStrictEqual("1857");
        expect(asciiHashMem(message)).toStrictEqual("1857");
    });

});