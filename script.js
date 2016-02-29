var start = function(option) {
	$('#grid_container').html("");
	var input = prompt('Choose a grid size between 1 and 128.');
	if (input >= 1 && input <= 128) {
		var square_size = $('#grid_container').width()/input - 2;

		for(var i = 1; i <= input; i++){
			for(var k = 1; k <= input; k++){
				$('#grid_container').append('<div class="grid_square"></div>');
			}
			$('#grid_container').append('<div class="new_row"></div>');
		}
		$('.grid_square').css('width', square_size);
		$('.grid_square').css('height', square_size);

		$('.grid_square').mouseenter(function(){
			switch(option){
				case 1:
					$(this).addClass('grid_lit');
					break;
				case 2:
					var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
					$(this).css('background-color', randomColorChange);
					break;
			}
		});
	}
	else {
		alert('No.');
	}



}