$(document).ready(function(){
	
	Charity.create_divs();
	
	$('#map').hide();
	hide_divs();

	$('#submit-button').click(function(event) {
		$('#map').slideDown(1500);
		event.preventDefault();
		var age = $( "#age" ).val();
		var state = $( "#state" ).val();
		show_local_div(age, state);
});


	$('#map').usmap({
		'stateStyles': {fill: '#7b91c4'},
		'stateHoverStyles': {fill: '#452f8c'},

	  click: function(event, data) {
	  	$('#clicked-state')
	  	.text(Charity.retrieve_data(data.name))
	  	.parent().effect('highlight', {color: '#C7F464'}, 2000);
		},

		mouseover: function(event, data){
			$('#local-div').hide();
			hide_divs();
			$('#'+data.name).show();
		}
	});



});

