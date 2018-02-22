var arr = [1,"orange", -3, "apple", 0.5];
var newarr = [];
function funtion() {
	for (var i = 0; i < arr.length; i++){
	if (typeof arr[i] === "number"){
		newarr.push(arr[i]);
	}
	}
	return newarr;
}
funtion([1,"orange", -3, "apple", 0.5]);
