// Import the dependencies for testing
var chai = require('chai');
var chaiHttp = require('chai-http');
var {app, startServer} = require('../../web');
// Configure chai
chai.use(chaiHttp);
chai.should();

var server;

describe("How to Win Web Integration tests:", () => {
    before(function(){        
        server = startServer(8080);
    });
    describe("Check how_2_win function with valid signatures:", () => {
        it("Check the example: --plaintiff N#V  --defendant NVV", (done) => {
             chai.request(app)
                 .get('/v1/how-2-win/plaintiff/N%23V/defendant/NVV')
                 .end((err, res) => {

                     res.should.have.status(200);
                     res.text.should.be.eq('N');
                     done();
                  });
         });
         it("Check the example: --plaintiff NVV --defendant N#V ", (done) => {
            chai.request(app)
                .get('/v1/how-2-win/plaintiff/NVV/defendant/N%23V')
                .end((err, res) => {

                    res.should.have.status(200);
                    res.text.should.be.eq('N');
                    done();
                 });
        });         
    });


    describe("Check how_2_win function with invalid signatures: ", () => {
        it("Check the example: --plaintiff N##V  --defendant NVV", (done) => {
             chai.request(app)
                 .get('/v1/how-2-win/plaintiff/N%23%23V/defendant/NVV')
                 .end((err, res) => {

                     res.should.have.status(400);
                     res.text.should.be.eq('"Invalid  Signatures: N##V - NVV"');
                     done();
                  });
         });
         it("Check the example: --plaintiff NVV  --defendant N##V ", (done) => {
            chai.request(app)
                .get('/v1/how-2-win/plaintiff/NVV/defendant/N%23%23V')
                .end((err, res) => {

                    res.should.have.status(400);
                    res.text.should.be.eq('"Invalid  Signatures: NVV - N##V"');
                    done();
                 });
        });         
    });

    after(function(){
        console.log("Stopping web server.")
        server.close();
    })
});