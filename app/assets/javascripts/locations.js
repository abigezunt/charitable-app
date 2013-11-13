$(document).ready(function(){
	
	Charity.create_divs();
	

	hide_divs();

	$('#map').usmap({
		'stateStyles': {fill: '#7b91c4'},
		'stateHoverStyles': {fill: '#452f8c'},

	  click: function(event, data) {
	  	$('#clicked-state')
	  	.text(Charity.retrieve_data(data.name))
	  	.parent().effect('highlight', {color: '#C7F464'}, 2000);
		},

		mouseover: function(event, data){
			hide_divs();
			$('#'+data.name).show();
		}
	});



});

