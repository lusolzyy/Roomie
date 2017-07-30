var {app} = require('../0-server/server');
var {PublicResource, PublicResourceEvent} = require('./resourceModel');
const Utils = require('../Utils');

var resourcesPost = () => {
    app.post('/resources/:resourceId', (req, res) => {
        var body = req.body;
        var newEvent = new PublicResourceEvent(body);

        addEventToResource(req.params.resourceId, newEvent).then(updatedResource => {
            res.send(updatedResource);
        }).catch(err => {
            res.status(400).send({
                status: 400,
                message: err
            });
        });
    });
};

var resourcesGet = () => {
    app.get('/resources', (req, res) => {
        PublicResource.find({}, (err, item) => {
                if (err) throw err;
                if (item == null) throw "Item not found!";
                return item;
            })
            .populate('resource_events')
            .exec((err, item) => {
                res.send({
                    resources: item
                });
            })
            .catch(e => {
                res.status(400).send({
                    status: 400,
                    message: err
                });
            });
    });
};

/**
 * @description Checks if newly added event will cause a time conflict
 * @param evts An array of events
 * @param ev newly added event
 */
function checkConflict(evts, newEv) {
    var inbetween = function(i, s, e) {
        return s < i && i <= e;
    }
    for (var i = 0; i < evts.length; i++) {
        var ev = evts[i];
        if (ev.day_of_week == newEv.day_of_week
            && (inbetween(newEv.start_at, ev.start_at, ev.end_at)
            || inbetween(newEv.end_at, ev.start_at, ev.end_at))) {
            return true;
        }
    }
    return false;
}

/**
 * @description Extract request body from FE and add into collection
 * @param resourceName String
 * @param ev JSON object in request body
 */
function addEventToResource(resourceId, ev) {
    var saveEvent = ev.save();
    var findResource = PublicResource.findOne({_id: resourceId}, (err, item) => {
            if (err) throw err;
            if (item == null) throw "Resource not found!";
            return item;
        });

    var savedResource = Promise.all([findResource, saveEvent]).then(values => {
        var res = values[0], evt = values[1];
        res.resource_events.push(evt._id);
        return res.save();
    });

    return savedResource.then(r => {
        return PublicResource.populate(r, {path: 'resource_events'});
    });
};

// addEventToResource("sss", newEvent);

module.exports = {
    resourcesGet,
    resourcesPost
};
