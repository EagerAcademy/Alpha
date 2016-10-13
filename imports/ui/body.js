/**
 * Created by GWFreak01 on 10/12/16.
 */
import {Template} from 'meteor/templating';

import {Students} from '../api/students/students.js';

import './body.html';
import './test.html';

Template.body.helpers({
    students() {
        return Students.find({});
    }
});

Template.body.events({
    'click .test'(event) {
        console.log("Button was clicked");
        console.log(Students.find({}));
    }
});