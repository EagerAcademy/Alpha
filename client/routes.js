/**
 * Created by GWFreak01 on 10/2/16.
 */

FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('MainLayout');
    }
});