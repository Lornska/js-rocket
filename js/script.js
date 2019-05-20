setTimeout(function () {
	location.href = 'rocket.html';
}, 2000);

// hey this is invisible 



var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red'
	} else { document.getElementById('cool').className = 'cool';
	 }

}
var sayMyName = function (name) {
		alert('My name is: '+name);
} 

var car = {
			make: 'VW',
			type:'Polo',
			color: 'blue',
			isTurnedOn: false,
			numberofWheels: 4,
			seats: ['seat1',
					'seat2',
					'seat3',
					'seat4'
				],
				turnOn: function () {
					this.isTurnedOn = true;
				},
				fly: function () {
					alert('fly');
				},
				switchCar: function (isOn) {
					console.log('turn car '+isOn)
						;

					if (isOn == true) {
						this.isTurnedOn = true;
					} else {
						this.isTurnedOn = false;
					}
				}
		};

		console.log('hello there friends!');