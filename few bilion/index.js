var num = 0.01;
var sum = 0;
for (var i = 1; i <= 30;i++){
	if (i == 1){
		console.log(i, "days", num);
	}
	else {
		num = num * 2;
	console.log( i, "days", num);
	}
	sum+=num;
	console.log(sum);
}