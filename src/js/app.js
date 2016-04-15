//app.js
var projectsArray = [
	{
		image: 'img/nutrition-tracker-darker.png',
		title: 'Nutrition Tracker Single-Page App',
		skills: 'HTML, Backbone,',
		cssClass: 'dark'
	},
	{
		image: 'img/jasmine-logo.png',
		title: 'Feed Reader Testing',
		skills: 'Jasime, Backbone,',
		cssClass: 'light'
	},
	{
		image: 'img/neighborhood-dark.png',
		title: 'Neighborhood Map Project',
		skills: 'HTML, Backbone,',
		cssClass: 'dark'
	},
	{
		image: 'img/donald.png',
		title: 'HTML5 Canvas Game - Make America Great, Again',
		skills: 'HTML, Backbone,',
		cssClass: 'dark'
	},
	{
		image: 'img/resume-dark.png',
		title: 'Interactive Resume',
		skills: 'HTML, Backbone,',
		cssClass: 'dark'
	},
	{
		image: 'img/psi.png',
		title: 'Web Optimization Project',
		skills: 'HTML, Backbone,',
		cssClass: 'light'
	}
];




var container = $('#feature-container');

var template = _.template($('#tile-template').html() );
/**
* @description Iterates over array of project obj, plugs into template, appends to page
* 
*/

_.each(projectsArray, function(project) {
	templateHTML = template(project);
	container.append(templateHTML);
} );




