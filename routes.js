Router.configure({
  layoutTemplate: 'applicationLayout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/news', function () {
  this.render('news');
});
