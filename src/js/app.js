//app.js
var projectsArray = [
	{
		image: 'img/nutrition-tracker-darker.png',
		title: 'Nutrition Tracker Single-Page App',
		url: 'http://sallust.github.io/nutrition-tracker-p5b/',
		skills: 'HTML, Backbone,',
		cssClass: 'dark'
	},
	{
		image: 'img/jasmine-logo.png',
		title: 'Feed Reader Testing',
		url: 'https://github.com/Sallust/frontend-nanodegree-feedreader',
		skills: 'Jasime, Backbone,',
		cssClass: 'light'
	},
	{
		image: 'img/neighborhood-dark.png',
		title: 'Neighborhood Map Project',
		url: 'http://sallust.github.io/fend-p5-neighborhood-map/',
		skills: 'HTML, Backbone,',
		cssClass: 'dark'
	},
	{
		image: 'img/donald.png',
		title: 'HTML5 Canvas Game - Make America Great, Again',
		url: 'http://sallust.github.io/frontend-nanodegree-arcade-game/',
		skills: 'HTML, Backbone,',
		cssClass: 'dark'
	},
	{
		image: 'img/resume-dark.png',
		title: 'Interactive Resume',
		url: 'http://sallust.github.io/',
		skills: 'HTML, Backbone,',
		cssClass: 'dark'
	},
	{
		image: 'img/psi.png',
		title: 'Web Optimization Project',
		url: 'https://github.com/Sallust/FEND-optimize',
		skills: 'HTML, Backbone,',
		cssClass: 'light'
	}
];

var contactsArray = [
	{
		title: 'e-mail',
		info: 'haile@post.harvard.edu',
		link: 'mailto:haile@post.harvard.edu'
	},
	{
		title: 'mobile',
		info: '240-476-7892',
		link: '#'
	},
	{
		title: 'github',
		info: 'Sallust',
		link: 'https://github.com/Sallust'
	}
	
];




var container = $('#feature-container');
var footer = $('#footer-contacts');


var template = _.template($('#tile-template').html() );
var footerTemplate = _.template($('#footer-template').html() );

/**
* @description Iterates over array of project obj, plugs into template, appends to page
* 
*/

_.each(projectsArray, function(project) {
	templateHTML = template(project);
	container.append(templateHTML);
} );

_.each(contactsArray, function(contact){
	footHTML = footerTemplate(contact);
	footer.append(footHTML);
});


  $('.port-link').click(function(){  
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 400);
    return false;
  });

  $('.contacts-link').click(function(){  
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 400);
    return false;
  });




