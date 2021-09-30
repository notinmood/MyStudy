import {expect} from "chai";
import {calculate} from "../src(module)/calculate.js";

describe('calculator', function () {
    it("加法计算", function () {
        expect(calculate.add(3, 5)).equals(8);
    });
});