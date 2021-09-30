const calc = require("../src(commonjs)/calculate");
const expect = require("chai").expect;

describe('实战应用:计算器', function () {
    it("加法计算", function () {
        expect(calc.add(3, 5)).equals(8);
    });

    it('减法计算', function () {
        expect(calc.minus(5, 9)).equals(-4);
    });

    it("乘法计算", function () {
        expect(calc.multi(3, 8)).equals(24);
    });

    it("除法计算", function () {
        expect(calc.divide(6, 3)).equals(2);
    });
});

