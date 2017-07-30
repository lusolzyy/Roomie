const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PublicResourceSchema = new Schema({
    resource_name: { type: String, required: true },
    resource_events: [{ type : Schema.Types.ObjectId, ref: 'PublicResourceEvent' }]
});

var PublicResource = mongoose.model("PublicResource", PublicResourceSchema);

var PublicResourceEventSchema = new Schema({
    event_name: { type: String, required: true },
    event_description: { type: String, default: '' },
    day_of_week: {
        type: Number,
        min: 0,
        max: 6,
        required: true
    },
    start_at: {
        type: Number,
        min: 0,
        max: 24,
        required: true
    },
    end_at: {
        type: Number,
        min: 0,
        max: 24,
        required: true
    }
});

var PublicResourceEvent = mongoose.model("PublicResourceEvent", PublicResourceEventSchema);

module.exports = {
    PublicResource,
    PublicResourceEvent
};
