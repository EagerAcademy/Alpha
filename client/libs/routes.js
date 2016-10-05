/**
 * Created by GWFreak01 on 10/2/16.
 */

FlowRouter.route('/', {
    name: 'main',
    action: function() {
        BlazeLayout.render('MainLayout');
    }
});

FlowRouter.route('/home', {
    name: 'home',
    action: function() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action: function() {
        BlazeLayout.render('LoginLayout');
    }
});

FlowRouter.route('/forgot', {
    name: 'forgot',
    action: function() {
        BlazeLayout.render('ForgotLayout');
    }
});

FlowRouter.route('/thankyou', {
    name: 'thankyou',
    action: function() {
        BlazeLayout.render('ThankYouLayout');
    }
});

FlowRouter.route('/test', {
    name: 'test',
    action: function() {
        BlazeLayout.render('LoginLayout', {main:'Test'});
    }
});