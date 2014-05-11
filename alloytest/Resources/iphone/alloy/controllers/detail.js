function Controller() {
    function closeWindow() {
        $.win.close();
    }
    function toggleAuthor() {
        $.toggleAuthor();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("book");
    $.__views.win = Ti.UI.createWindow({
        id: "win",
        title: "Book"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.__alloyId2 = Ti.UI.createView({
        id: "__alloyId2"
    });
    $.__views.win.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "Title",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.title = Ti.UI.createLabel({
        id: "title"
    });
    $.__views.__alloyId2.add($.__views.title);
    $.__views.toggleAuthorButton = Ti.UI.createButton({
        title: "Show author",
        id: "toggleAuthorButton"
    });
    $.__views.__alloyId2.add($.__views.toggleAuthorButton);
    toggleAuthor ? $.__views.toggleAuthorButton.addEventListener("click", toggleAuthor) : __defers["$.__views.toggleAuthorButton!click!toggleAuthor"] = true;
    $.__views.authorLabel = Ti.UI.createLabel({
        text: "Author",
        id: "authorLabel",
        visible: "false"
    });
    $.__views.__alloyId2.add($.__views.authorLabel);
    $.__views.author = Ti.UI.createLabel({
        id: "author",
        visible: "false"
    });
    $.__views.__alloyId2.add($.__views.author);
    $.__views.__alloyId4 = Ti.UI.createButton({
        title: "Close",
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    closeWindow ? $.__views.__alloyId4.addEventListener("click", closeWindow) : __defers["$.__views.__alloyId4!click!closeWindow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    collection = Alloy.Collections.book;
    var args = arguments[0] || {};
    var book;
    $.init = function() {
        collection.fetch();
        book = collection.get(args.item_id);
        $.title.text = book.get("title");
        $.author.text = book.get("author");
        $.win.open();
    };
    $.toggleAuthor = function() {
        if (true === $.author.visible) {
            $.toggleAuthorButton.title = "Show author";
            $.authorLabel.visible = false;
            $.author.applyProperties({
                visible: false
            });
        } else {
            $.toggleAuthorButton.title = "Hide author";
            $.authorLabel.visible = true;
            $.author.applyProperties({
                visible: true
            });
        }
    };
    $.init();
    __defers["$.__views.toggleAuthorButton!click!toggleAuthor"] && $.__views.toggleAuthorButton.addEventListener("click", toggleAuthor);
    __defers["$.__views.__alloyId4!click!closeWindow"] && $.__views.__alloyId4.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;