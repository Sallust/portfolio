//app.js

var container = $('#feature-container');

var template = _.template($('#test-template').html() );

var templateHTML = template({testString:'Sup World'});

container.append(templateHTML);


