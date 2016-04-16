//app.js
var projectsArray = [
	{
		image: 'img/nutrition-tracker-darker.png',
		title: 'Nutrition Tracker Single-Page App',
		url: 'http://sallust.github.io/nutrition-tracker-p5b/',
		skills: 'Backbone • d3 • AJAX • JavaScript • HTML5 • CSS • Firebase • jQuery • gulp',
		cssClass: 'dark'
	},
	{
		image: 'img/jasmine-logo.png',
		title: 'Feed Reader Testing',
		url: 'https://github.com/Sallust/frontend-nanodegree-feedreader',
		skills: 'Jasime •  JavaScript Tesing Frameworks •  JavaScript', 
		cssClass: 'light'
	},
	{
		image: 'img/neighborhood-dark.png',
		title: 'Neighborhood Map Project',
		url: 'http://sallust.github.io/fend-p5-neighborhood-map/',
		skills: 'AJAX •  JavaScript •  jQuery •  HTML5 •  CSS •  Knockout •  Data Persistence',
		cssClass: 'dark'
	},
	{
		image: 'img/donald.png',
		title: 'HTML5 Canvas Game - Make America Great, Again',
		url: 'http://sallust.github.io/frontend-nanodegree-arcade-game/',
		skills: 'Photoshop •  HTML5 Canvas •  HTML5 •  CSS •  JavaScript •  Object-Oriented Programming',
		cssClass: 'dark'
	},
	{
		image: 'img/resume-dark.png',
		title: 'Interactive Resume',
		url: 'http://sallust.github.io/',
		skills: 'Google Polymer •  HTML5 •  CSS •  jQuery',
		cssClass: 'dark'
	},
	{
		image: 'img/psi.png',
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




