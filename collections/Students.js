/**
 * Created by GWFreak01 on 10/10/16.
 */
Students = new Meteor.Collection('students');

StudentSchema = new SimpleSchema({
    studentID: {
        type: String,
        label: "studentID"

    },
    school: {
        type: String,
        label: "school"
    },

});