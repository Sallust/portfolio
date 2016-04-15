//app.js
var projectsArray = [
	{
		image: 'img/nutrition-tracker-darker.png',
		title: 'Nutrition Tracker Single-Page App',
		skills: 'HTML, Backbone,'
	},
	{
		image: 'img/nutrition-tracker-darker.png',
		title: 'Nutrition Tracker Single-Page App',
		skills: 'HTML, Backbone,'
	},
	{
		image: 'img/nutrition-tracker-darker.png',
		title: 'Nutrition Tracker Single-Page App',
		skills: 'HTML, Backbone,'
	},
	{
		image: 'img/nutrition-tracker-darker.png',
		title: 'Nutrition Tracker Single-Page App',
		skills: 'HTML, Backbone,'
	},
	{
		image: 'img/nutrition-tracker-darker.png',
		title: 'Nutrition Tracker Single-Page App',
		skills: 'HTML, Backbone,'
	},
	{
		image: 'img/nutrition-tracker-darker.png',
		title: 'Nutrition Tracker Single-Page App',
		skills: 'HTML, Backbone,'
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




