const expect = require("chai").expect;

/**
 * 说明
 * ════════════════════════
 * describe块称为“测试套件”，表示一组相关的测试。
 * it块称为“测试用例”，表示一个单独的测试，是测试的最小单位。
 */

/**
 * expect()后面的加不加 be to 都一样？
 */


describe('入门测试', function () {
    it('4 + 5应该等于9', function () {
        expect(4 + 5).to.be.equal(9);
    });

    it("加法", function () {
        expect(1 + 1).to.equal(2);
    });

    it("乘法", function () {
        expect(2 * 7).be.equal(14);
    });

    it("减法", function () {
        expect(6 - 6).equal(0);
    });
});

