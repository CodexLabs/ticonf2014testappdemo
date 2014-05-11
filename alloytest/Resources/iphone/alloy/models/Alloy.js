var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("alloy", exports.definition, []);

collection = Alloy.C("alloy", exports.definition, model);

exports.Model = model;

exports.Collection = collection;