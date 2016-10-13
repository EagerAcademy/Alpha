import { Meteor } from 'meteor/meteor';

import '../imports/api/students/students.js';

Meteor.startup(function () {
    console.log("Server side Startup Initialized");
});