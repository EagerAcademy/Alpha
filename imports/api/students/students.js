import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:collection2';
// import {SimpleSchema} from 'meteor/aldeed:simple-schema';
// import {Factory} from 'meteor/dburles:factory';
// import {_} from 'meteor/underscore';
import faker from 'faker';

// import { Courses } from '../../courses/courses.js';
// import { Teachers } from '../../teachers/teachers.js';
// import { Schools } from '../../schools/schools.js';

/*
 --::TODO::--
 */
//Mongo Methods

console.log("Created Student Collection");

class StudentsCollection extends Mongo.Collection {
    /*insert(doc, callback) {
     const ourDoc = doc;
     ourDoc.createdAt = ourDoc.createdAt || new Date();
     const result = super.insert(ourDoc, callback);
     incompleteCountDenormalizer.afterInsertTodo(ourDoc);
     return result;
     }
     update(selector, modifier) {
     const result = super.update(selector, modifier);
     //incompleteCountDenormalizer.afterUpdateTodo(selector, modifier);
     return result;
     }
     remove(selector) {
     const todos = this.find(selector).fetch();
     const result = super.remove(selector);
     incompleteCountDenormalizer.afterRemoveTodos(todos);
     return result;
     }*/

}

// export const Students = new StudentsCollection('Students');

export const Students = new Mongo.Collection('students');

let studentExample = {
    _id: "3d3ad3ad-5bce-a672-fddf-bd57ba0190bd",
    studentId: "007",
    schoolId: "5de5b455-18e7-c3a5-24c5-a6bde9a203f8",
    firstname: "Johnnie",
    lastname: "Walkington",
    password: "none",
    email: "jwalk666@gmail.com",
    points: "243",
    courseSchedule: [
        {
            _id: "d979c77d-0408-827d-153b-b6bf656e6d40",
            courseName: "Calculus I",
            courseId: "MATH-201",
            teacher: [
                "4cb295fe-e516-4a8b-4abd-94e5da43856c"
            ],
            students: [
                "3d3ad3ad-5bce-a672-fddf-bd57ba0190bd"
            ],
            assignments: [
                "d979c77d-0408-827d-153b-b6bf656e6d40"
            ]
        }
    ]
};
// if (!Students.findOne({})) {
//     Students.insert(studentExample);
// }

// Students.deny({
//     //Denial of client-side updates, instead will use methods to manage this collection
//     insert() {
//         return true;
//     },
//     update() {
//         return true;
//     },
//     remove() {
//         return true;
//     },
// });
//
// let Schemas = {};
// Schemas.Students = new SimpleSchema({
//     _id: { //Unique student/user identifier within the system (Persistance of account between schools)
//         type: String,
//         regEx: SimpleSchema.RegEx.Id,
//         denyUpdate: true,
//     },
//     studentId: { //Unique student identifier relative to the school
//         type: String,
//         regEx: SimpleSchema.RegEx.Id,
//         label: "School defined student ID",
//         denyUpdate: false,
//     },
//     schoolId: { //Unique school identifier the student associated with
//         type: String,
//         regEx: SimpleSchema.RegEx.Id,
//         denyUpdate: false,
//     },
//     firstName: {
//         type: String,
//         label: "First name",
//         max: 25,
//     },
//     lastName: {
//         type: String,
//         label: "Last name",
//         max: 35,
//     },
//     password: {
//         type: String,
//         max: 30,
//         //Encryption / Hashing ??
//     },
//     email: {
//         type: String,
//         regEx: SimpleSchema.RegEx.Email,
//         max: 50,
//     },
//     points: {
//         type: Number,
//         label: "Current number of acquired points",
//         defaultValue: 0,
//     },
//     // courseSchedule: { type: [Courses],} //Courses a student is currently enrolled in; cleared when course complete
//     courseSchedule: {type: [],}
// });

// Students.attachSchema(Schemas.Students);
// This represents the keys from Student objects that should be published to the client.
Students.publicFields = {
    _id: 1,
    studentId: 1,
    schoolId: 1,
    firstName: 1,
    lastName: 1,
    email: 1,
    points: 1,
    courseSchedule: 1,
};

// /*
//  --::TODO::--
//  */
// // Factory for defining student
// Factory.define('student', Students, {
//     _id: () => _.uniqueId(),
//     schoolId: () => Factory.get('school'),
// });
//
// /*
//  --::TODO::--
//  */
// //Helpers - Getter/Setter
// Students.helpers({
//     school() {
//         return this.schoolId;
//     },
//
// });
