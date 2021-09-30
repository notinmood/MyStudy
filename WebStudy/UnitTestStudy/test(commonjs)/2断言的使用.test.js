const expect = require("chai").expect;

describe("断言的使用", function () {
    it("相等", function () {
        expect(4 + 5).equal(9);
    });

    it("不等", function () {
        expect(1 + 1).not.equal(3);
    });

    it("为true", function () {
        expect(1 == 1).true;
    });

    it("为true", function () {
        expect(1 == 1).ok;
    });

    it("为false", function () {
        expect(1 == 2).not.ok;
    });

    it("为false", function () {
        expect(1 == 2).false;
    });

    it("为false", function () {
        expect(1 == 2).not.true;
    });

    it("判断为空", function () {
        expect("").empty;
    });

    it("判断非空", function () {
        expect("哈哈哈").not.empty;
    });

});
