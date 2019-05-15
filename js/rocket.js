var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state'+ state;
	clearInterval(timer);

	if (state == 2) {
		timer = setInterval(function () {
			document.getElementById('countdown').innerHTML = countdownNumber; countdownNumber = countdownNumber -1;
			if (countdownNumber <= 0) {
			
				changeState(3);
			}
		}, 500);
	} else if (state == 3) {

	};
}