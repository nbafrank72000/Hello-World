function showTime(){
	var time = new Date();
	var year = time.getFullYear();
	var month = time.getMonth();
	var date = time.getDate();
	var day = time.getDay();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();

	var months = new Array('January', 'Frbruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
	var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
	var rule = document.getElementById('switch_rule').innerHTML;

	if(date == 1){
		date = "1st"
	}
	else if(date == 2){
		date = "2nd"
	}
	else if(date == 3){
		date = "3rd";
	}else{
		date = date + "th";
	}
	if(hour < 10){
		hour = "0" + hour;
	}
	else if(hour > 12){
		if(rule == '12H'){
			hour = hour - 12;
		}
	}

	if(minute < 10){
		minute = "0" + minute;
	}
	if(second < 10){
		second = "0" + second;
	}
	var day_result = year + "-" + months[month] + "-" + date + "  (" + days[day] + ")";
	var time_result = hour + ":" + minute + ":" + second;
	/* This part is for debug
	document.getElementById('test').innerHTML = time;
	document.getElementById('year').innerHTML = year;
	document.getElementById('month').innerHTML = months[month];
	document.getElementById('date').innerHTML = date;
	document.getElementById('day').innerHTML = days[day];
	document.getElementById('hour').innerHTML = hour;
	document.getElementById('minute').innerHTML = minute;
	document.getElementById('second').innerHTML = second;
	*/
	document.getElementById('day_result').innerHTML = day_result;
	document.getElementById('time_result').innerHTML = time_result;

	setTimeout(function(){showTime()}, 500);
}

function color_change_smooth(){
	var time = new Date();
	var second = time.getSeconds();
	var mSecond = time.getMilliseconds();
	var hue = (second * 6) + Math.floor(mSecond/167);

	var colors = "hsl(" + hue + ", 100%, 50%)";
	document.getElementById('body').style.backgroundColor = colors;

	setTimeout(function(){color_change_smooth()}, 100);
}

function switch_rule(){
	var rule = document.getElementById('switch_rule').innerHTML;
	if(rule == '12H'){
		document.getElementById('switch_rule').innerHTML = '24H';
	}
	else{
		document.getElementById('switch_rule').innerHTML = '12H';
	}
}

	