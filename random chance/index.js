var user = 140;
function slotmachine(qtr) {
	for (var i = qtr; i > 0; i--){
		var x = Math.floor(Math.random()*100);
		if (x <= 3){
			console.log(qtr + (user-qtr));
		}
	}
}
slotmachine(25);
