import {expect} from "chai";

/**
 * 说明
 * ════════════════════════
 * describe块称为“测试套件”，表示一组相关的测试。
 * it块称为“测试用例”，表示一个单独的测试，是测试的最小单位。
 */

/**
 * expect()后面的加不加 be to 都一样？
 */


describe('expect', function () {
    it('4+5应该等于9', function () {
        expect(4 + 5).to.be.equal(9);
    });
});

