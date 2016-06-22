'use strict';
console.log("Loading function");
var moment = require('moment-timezone');
console.log(moment.tz.names());

exports.handler = (event, context, callback) => {
    var time = '';

    if (event.query.tz && moment.tz.zone(event.query.tz)) {
        time = moment().tz(event.query.tz).format("DD-MM-YYYY HH:mm:ss");
    } else {
        var tz = moment.tz.guess();
        time = moment().tz(tz).format("DD-MM-YYYY HH:mm:ss");
    }

    console.log(time);

    context.succeed(time);


    //console.log(moment.tz.names());

}
