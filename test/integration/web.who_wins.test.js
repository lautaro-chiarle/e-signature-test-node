// Import the dependencies for testing
var chai = require('chai');
var chaiHttp = require('chai-http');
var {app, startServer} = require('../../web');
// Configure chai
chai.use(chaiHttp);
chai.should();

var server;

describe("Who Wins Web Integration tests:", () => {
    before(function(){        
        server = startServer(8080);
    });    
    describe("Check who_wins function with valid signatures:", () => {
        it("Check the example: --plaintiff KN  --defendant NNV", (done) => {
             chai.request(app)
                 .get('/v1/who-wins/plaintiff/kn/defendant/nnv')
                 .end((err, res) => {

                     res.should.have.status(200);
                     res.text.should.be.eq('Plaintiff');
                     done();
                  });
         });
    });
    describe("Check who_wins function with invalid signatures: ", function () {
        it("Check the example: --plaintiff KNF  --defendant NNV", (done) => {
            chai.request(app)
                .get('/v1/who-wins/plaintiff/knf/defendant/nnv')
                .end((err, res) => {

                    res.should.have.status(400);
                    res.text.should.be.eq('"Invalid Plaintiff Signatures:  KNF"');
                    done();
                 });
      });    
    });  
    after(function(){
        console.log("Stopping web server.")
        server.close();
    })
});