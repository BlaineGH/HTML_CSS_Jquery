var HOUR = 8;
var minute = 50;
var period = "am";
var time = 0;
var amorpm = 0;
if (period == "am"){
	amorpm = "in the morning";
	if  (minute > 30){
		 time = "almost";
		 HOUR += 1;
	}
	if (minute < 30){
		time = "just after";
		HOUR;
	}
}
else{
	(period=="pm");
	amorpm = "in the evening";
	if (minute > 30){
		time= "almost";
		HOUR += 1;
	}
	if (minute < 30){
		time = "just after";
		HOUR;
	}
}




console.log("It's",time, HOUR,amorpm)