//app.js

/*  
Houses data to populate website
Uses underscore template to populate tiles and footer
Also includes jQuery animation for anchor links
*/
$(function() {
	var projectsArray = [
	{
		image: 'img/nutrition-500.jpeg',
		title: 'Nutrition Tracker Single-Page App',
		url: 'http://sallust.github.io/nutrition-tracker-p5b/',
		skills: 'Backbone • d3 • AJAX • JavaScript • HTML5 • CSS • Firebase • jQuery • gulp • Responsive Design',
		cssClass: 'dark'
	},
	{
		image: 'img/jasmine-500.jpeg',
		title: 'Feed Reader Testing',
		url: 'https://github.com/Sallust/frontend-nanodegree-feedreader',
		skills: 'Jasime •  JavaScript Tesing Frameworks •  JavaScript', 
		cssClass: 'light'
	},
	{
		image: 'img/neighborhood-500.jpeg',
		title: 'Neighborhood Map Project',
		url: 'http://sallust.github.io/fend-p5-neighborhood-map/',
		skills: 'AJAX •  JavaScript •  jQuery •  HTML5 •  CSS •  Knockout •  Data Persistence • Responsive Design',
		cssClass: 'dark'
	},
	{
		image: 'img/donald-500.jpeg',
		title: 'HTML5 Canvas Game - Make America Great, Again',
		url: 'http://sallust.github.io/frontend-nanodegree-arcade-game/',
		skills: 'Photoshop •  HTML5 Canvas •  HTML5 •  CSS •  JavaScript •  Object-Oriented Programming',
		cssClass: 'dark'
	},
	{
		image: 'img/resume-500.jpeg',
		title: 'Interactive Resume',
		url: 'http://sallust.github.io/',
		skills: 'Google Polymer •  HTML5 •  CSS •  jQuery • Responsive Design',
		cssClass: 'dark'
	},
	{
		image: 'img/psi-500.jpeg',
		title: 'Web Optimization Project',
		url: 'https://github.com/Sallust/FEND-optimize',
		skills: 'Chrome Developer Tools •  Critical Rendering Path •  HTML5 •  CSS •  60 FPS Rendering',
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
	},
	{
		title: 'linkedIn',
		info: 'DannyHaile',
		link: 'https://www.linkedin.com/in/dannyhaile'
	}
];

var container = $('#feature-container');
var footer = $('#footer-contacts');

var template = _.template($('#tile-template').html() );
var footerTemplate = _.template($('#footer-template').html() );

/**
* @description Iterates over array of project/contact objects,
*  plugs into template, appends to page
*/

_.each(projectsArray, function(project) {
	templateHTML = template(project);
	container.append(templateHTML);
} );

_.each(contactsArray, function(contact){
	footHTML = footerTemplate(contact);
	footer.append(footHTML);
});

//Animated scrolling
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
});




