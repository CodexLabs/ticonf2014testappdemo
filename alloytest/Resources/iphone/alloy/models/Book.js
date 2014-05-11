Alloy = require("alloy");

exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY",
            title: "TEXT",
            author: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "book",
            db_name: Alloy.CFG.db_name,
            idAttribute: "id"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            toString: function() {
                return String.format("%s (%s)", this.get("title"), this.get("author"));
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("book", exports.definition, []);

collection = Alloy.C("book", exports.definition, model);

exports.Model = model;

exports.Collection = collection;