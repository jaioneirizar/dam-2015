$(function (){

	var $divs = $('div.module');
	var $li = $('#myList li:nth-child(3)');
	var $lis = $('#myList $li.eq(3)');

	var $ul =$('#myList');

	var $lis =$('#myList li');




	//delegacion de eventos 'li'
	$ul.on('click mouseover', 'li', function(e){


		console.log(e);
		console.log (this);

	});

	

	var $input = $('input[name="q"]');
	var $label = $('label[for="' + $input.attr('name') + '"]');
	
	var $hidden = $(':hidden');

	$hidden.each(function(idx,elem){
		//console.log (elem);
		$(elem).show();
	});

	console.log($hidden.length);


	var $img = $('img');
	$img.each(function(idx, elem){

			console.log(elem.alt);

	});

	$input.closest('form').addClass('form');
	$input.closest('form').removeClass('form');

	//toggle, si la tiene se la quitas y si no la tiene se lo pone
	$input.closest('form').toggleClass('form');


	var $current = $('#myList .current');

	$current.removeClass('current').next().addClass('current');


	var $submit =$('#special select').closest('ul').find('input [type="submit"]');

	$('#slideshow li').first().addClass('current').siblings().addClass('disabled');

	
	var lis =[];

	for (i=0; i< 5; i++){
			lis.push('<li> Element ' + i +' </li>');

	}

	$ul.find('li:odd').remove();


	$ul.append(lis.join(''));

	$li = $('<li/>', {
		class: 'current',
		text: 'Node List',
		id: 'myli'
	});

	$ul.append($li);
	$li.appendTo($ul);
	
	
});