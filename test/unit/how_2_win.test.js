var { expect, assert } = require("chai");
var { how_2_win } = require("../../core");


describe("How to Win Unit tests: ", function () {
    describe("Check how_2_win function with valid signatures: ", function () {
      it("Check the example: --plaintiff N#V  --defendant NVV", function () {
        result = how_2_win("N#V", "NVV");
        expect(result).to.equal("N");
      });
      it("Check the example: --plaintiff NVV --defendant N#V ", function () {
        result = how_2_win("NVV", "N#V");
        expect(result).to.equal("N");
      });      
    });
    describe("Check how_2_win function with invalid signatures: ", function () {
      it("Check the example: --plaintiff N##V  --defendant NVV", function () {
        assert.throws(() => {how_2_win("N##V", "NVV")}, Error, "Invalid  Signatures: N##V - NVV");
      });
      it("Check the example: --plaintiff NVV  --defendant N##V", function () {
        assert.throws(() => {how_2_win("NVV", "N##V")}, Error, "Invalid  Signatures: NVV - N##V");
      });      
    });
  });
