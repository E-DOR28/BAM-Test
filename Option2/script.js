		var deadLine = new Date("May 4, 2018 00:02:00").getTime(); // Add here the deadline
		var daysDiv = document.getElementById("days");
		var hrsDiv = document.getElementById("hrs");
		var minsDiv = document.getElementById("mins");
		var secsDiv = document.getElementById("secs");

		// Update the count down every 1 second
		var countDown = setInterval(function() {
			var currentDateTime = new Date().getTime();

			var difference = deadLine - currentDateTime;

			if (difference < 0) difference = 0;

			daysDiv.innerHTML = addSubstring(Math.floor(difference / (1000 * 60 * 60 * 24)));
			hrsDiv.innerHTML = addSubstring(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
			minsDiv.innerHTML = addSubstring(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
			secsDiv.innerHTML = addSubstring(Math.floor((difference % (1000 * 60)) / 1000));
			
		}, 1000);

		function addSubstring(num) {
			num = "" + num;
			var Num = ("00" + num).substring(num.length);//add your amount of zeros
			return Num;
		}