var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state'+ state;
	clearInterval(timer);

	// countdown
	if (state == 2) {
		timer = setInterval(function() {
			countdownNumber =countdownNumber-1;
			document.getElementbyId('countdown').innerHTML = countdownNumber

			if (countdownNumber > 4 && countdownNumber <= 7) {
				// be nervous
				document.getElementbyId('nervous').className = 'nervous show';
			} else {
				document.getElementbyId('nervous').className = 'nervous';
			}

			if (countdownNumber > 1 && countdownNumber <= 4) {
				// can't wait
				document.getElementbyId('cant-wait').className = 'cant-wait show';
			} else {
				document.getElementbyId('cant-wait').className = 'cant-wait';
			}

			if (countdownNumber <= 0) {
				changeState(3);
			};

			}
		}, 500;

	} else if (state == 3) {
		var success = setTimeOut(function () {

			var randomNumber = Math.round(Math.random()*10);

			console.log('randomNumber:'+randomNumber)

				// success
			if (randomNumber > 2) {
				changeState(4);
			} else {
				changeState(5); //oh no!
			}
		}, 2000);
	};