var html = document.getElementsByTagName("html")[0];
		var rootResize = function() {
		var winClient = document.documentElement.clientWidth;
		var fontSize = winClient < 640 ? winClient / 16 : 40;
		if (fontSize < 20) {
			fontSize = 20;
		}
		html.style.fontSize = fontSize + "px";
		}
		rootResize();
		window.onresize = function() {
		rootResize();
		}