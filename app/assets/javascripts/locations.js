$(document).ready(function(){

	$('#map').usmap({
		'stateStyles': {fill: '#7b91c4'},
		'stateHoverStyles': {fill: '#452f8c'},
  // The click action
	  click: function(event, data) {
	  	$('#clicked-state')
	  	// .text('You clicked: '+ data.name)
	  	.text(Charity.retrieve_data(data.name))
	  	.parent().effect('highlight', {color: '#C7F464'}, 2000);
		}
	});
	Charity.create_divs();
	$('#data-div').hide();

});

