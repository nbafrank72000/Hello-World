function gen_random_color(){
		return "#" + Math.random().toString(16).slice(2,8);
}
function gen_tangram_color(){
	x_1 = gen_random_color();
	document.getElementById('circle_1').style.backgroundColor = x_1;
	x_2 = gen_random_color();
	document.getElementById('circle_2').style.backgroundColor = x_2;
	x_3 = gen_random_color();
	document.getElementById('circle_3').style.backgroundColor = x_3;
	x_4 = gen_random_color();
	document.getElementById('circle_4').style.backgroundColor = x_4;
	x_5 = gen_random_color();
	document.getElementById('circle_5').style.backgroundColor = x_5;
	x_6 = gen_random_color();
	document.getElementById('circle_6').style.backgroundColor = x_6;
	x_7 = gen_random_color();
	document.getElementById('circle_7').style.backgroundColor = x_7;
}