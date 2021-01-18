var { expect, assert } = require("chai");
var { how_2_win } = require("../core");


describe("How to Win tests: ", function () {
    describe("Check how_2_win function with valid signatures: ", function () {
      it("Check the example: -plaintiff N#V  -defendant NVV", function () {
        result = how_2_win("N#V", "NVV");
        expect(result).to.equal("N");
      });
    });
    describe("Check who_wins function with invalid signatures: ", function () {
      it("Check the example: -plaintiff N##V  -defendant NVV", function () {
        assert.throws(() => {how_2_win("N##V", "NVV")}, Error, "Invalid  Signatures: N##V - NVV");
      });
    });
  });
