var { expect, assert } = require("chai");
var { who_wins } = require("../core");

describe("Who Wins tests: ", function () {
  describe("Check who_wins function with valid signatures: ", function () {
    it("Check the example: -plaintiff KN  -defendant NNV", function () {
      result = who_wins("KN", "NNV");
      expect(result).to.equal("Plaintiff");
    });
  });
  describe("Check who_wins function with invalid signatures: ", function () {
    it("Check the example: -plaintiff KNF  -defendant NNV", function () {
      assert.throws(() => {who_wins("KNF", "NNV")}, Error, "Invalid Plaintiff Signatures:  KNF");
    });
  });
});

