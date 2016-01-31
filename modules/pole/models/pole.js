var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PoleModel = new Schema({
    title: { type: String, required: true },
    owner: { type: String, required: true },
    ownerId: { type: String, required: true },
    created: { type: Date, default: Date.now },
    open: { type: Date, default: Date.now },
    closed: { type: Date, default: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) }
});

module.exports = mongoose.model('Pole', PoleModel);