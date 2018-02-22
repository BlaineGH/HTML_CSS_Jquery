var daysuntilmybirthday = 60;
var more30 = "days until my birthday, to long";
var less30 = "days until my birthday";
var less5 = "days until my birthday!!!!!!!";
var bday = "It's MY BIRTHDAY!!!!!!";
for (var i = daysuntilmybirthday; i >= 0; i--){
	if (i == 0){
		console.log(bday);
	}
	else if ( i <= 5){
		console.log(i + less5);	
	}
	else if (i <= 30){
		console.log(i + less30);
	}
	else if (i > 30){
		console.log(i + more30);
	}
}