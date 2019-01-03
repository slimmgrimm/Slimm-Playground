var module = (function (global) {
var myArray = [1,2,3,4,5,6,7,8,9];
var length = myArray.length;
var outputText = ''; 
for(var i = 0; i < length; i++){
	if(i%2) {
		outputText = outputText + "\nI'm outputting this number: " + myArray[i];
	}
}

$('#output').html(outputText);
})(this)