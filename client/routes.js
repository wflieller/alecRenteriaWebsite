Router.configure({

  layoutTemplate: "layout"

});

Router.map(function() {

	this.route('home', {
		path: '/'
	});

	this.route('beats');
	this.route('contact');
	this.route('media');
	

	RouterAutoscroll.animationDuration = 500;
	
});
