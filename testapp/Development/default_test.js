// creates the "mocha" global necessary to run a test suite anywhere in your app
require('ti-mocha');
var should = require('should');

var fakeModule = {
    active: true,
    age: 21
};

// create the test suite
describe('ti-mocha Vanilla', function() {

    describe('Testing values', function() {

        it('user should be active', function(){
            fakeModule.active.should.equal(true);
        });


        it('user should be 22', function(){
            fakeModule.age.should.equal(22);
        });

        it('user meta data should contain fave movies', function(done){
            fakeModule.meta.favemovies.should.contain('Star Trek');
        });

    });

});

// run the tests
mocha.run();