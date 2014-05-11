// creates the "mocha" global necessary to run a test suite anywhere in your app
require('ti-mocha');

// create the test suite
describe('ti-mocha', function() {
    var Alloy = require("alloy");
    var $;
    var collection;
    var item;

    beforeEach(function(){
        collection = Alloy.createCollection('book');
        item = Alloy.createModel('book');
    });

    describe('#find()', function(){
        it('should return the index when present', function(){
            item.set({
                id: 1,
                title: "The cloud atlas",
                author: "David Mitchell"
            });
            item.save();

            $ = Alloy.createController('detail', {item_id: item.get('id')});

            $.title.text.should.equal(item.get('title'));

        });
    });

    afterEach(function () {
        item.destroy();
    });

});

// run the tests
mocha.run();
