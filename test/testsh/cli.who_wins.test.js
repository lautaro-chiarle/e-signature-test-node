const { exec } = require("child_process");
var chai = require("chai");
chai.use(require('chai-string'));
var expect = chai.expect;
var assert = chai.assert;




describe("Who Wins CLI Integration tests: ", function () {
    describe("Check who_wins function with valid signatures: ", function () {
      it("Check the example: --plaintiff KN  --defendant NNV", function () {
        exec("node index.js whowins --plaintiff KN  --defendant NNV", (error, stdout, stderr) => {
            if (error) {
                assert.fail(error);
            }
            if (stderr) {
                assert.fail(stderr);
            }
            expect(stdout).to.equal("Plaintiff\n");
        });
      });
    });

    describe("Check who_wins function with invalid signatures: ", function () {
        it("Check the example: --plaintiff KNF  --defendant NNV", function () {
            exec("node index.js whowins --plaintiff KNF  --defendant NNV", (error, stdout, stderr) => {
                assert.isNotNull(error);
                expect(error.message).to.startsWith("Command failed: node index.js whowins --plaintiff KNF  --defendant NNV");
                assert.isNotNull(stderr);
            }); 

        });
      });    

  });