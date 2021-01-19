const { exec } = require("child_process");
var chai = require("chai");
chai.use(require('chai-string'));
var expect = chai.expect;
var assert = chai.assert;




describe("How to Win CLI Integration tests: ", function () {
    describe("Check how_2_win function with valid signatures: ", function () {
      it("Check the example: --plaintiff N#V  --defendant NVV", function () {
        exec("node index.js how2win --plaintiff N#V  --defendant NVV", (error, stdout, stderr) => {
            if (error) {
                assert.fail(error);
            }
            if (stderr) {
                assert.fail(stderr);
            }
            expect(stdout).to.equal("N\n");
        });
      });
      it("Check the example: --plaintiff N#V  --defendant NVV", function () {
        exec("node index.js how2win --plaintiff NVV  --defendant N#V", (error, stdout, stderr) => {
            if (error) {
                assert.fail(error);
            }
            if (stderr) {
                assert.fail(stderr);
            }
            expect(stdout).to.equal("N\n");
        });
      });      
    });

    describe("Check how_2_win function with invalid signatures: ", function () {
        it("Check the example: --plaintiff N##V  --defendant NVV", function () {
            exec("node index.js how2win --plaintiff N##V  --defendant NVV", (error, stdout, stderr) => {
                assert.isNotNull(error);
                expect(error.message).to.startsWith("Command failed: node index.js how2win --plaintiff N##V  --defendant NVV");
                assert.isNotNull(stderr);
            }); 
        });
        it("Check the example: --plaintiff NVV  --defendant N##V", function () {
            exec("node index.js how2win --plaintiff NVV  --defendant N##V", (error, stdout, stderr) => {
                assert.isNotNull(error);
                expect(error.message).to.startsWith("Command failed: node index.js how2win --plaintiff NVV  --defendant N##V");
                assert.isNotNull(stderr);
            }); 
        });        
      });    

  });