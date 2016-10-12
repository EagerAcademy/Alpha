/**
 * Created by GWFreak01 on 10/11/16.
 */


Meteor.subscribe('Students');

Template.LoginLayout.events({
    'submit form': function (event) {
        console.log("Init_Login");
        event.preventDefault();
        var usernameVar = event.target.username.value;
        var passwordVar = event.target.password.value;

        console.log(usernameVar);
        console.log(passwordVar);
        // WAITING FOR SWITZ
        // if (Student.findOne({email: usernameVar}, {password: passwordVar})){
        //     FlowRouter.route('/home');
        // }
    }
});