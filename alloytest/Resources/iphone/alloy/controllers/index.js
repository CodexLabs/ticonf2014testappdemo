function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "red",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "RapidDev Alloy",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("ti-mocha");
    describe("ti-mocha", function() {
        var Alloy = require("alloy");
        var $;
        var collection;
        var item;
        beforeEach(function() {
            collection = Alloy.createCollection("book");
            item = Alloy.createModel("book");
        });
        describe("#find()", function() {
            it("should return the index when present", function() {
                item.set({
                    id: 1,
                    title: "The cloud atlas",
                    author: "David Mitchell"
                });
                item.save();
                $ = Alloy.createController("detail", {
                    item_id: item.get("id")
                });
                $.title.text.should.equal(item.get("title"));
            });
        });
        afterEach(function() {
            item.destroy();
        });
    });
    mocha.run();
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;