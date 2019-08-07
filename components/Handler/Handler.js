function Handler(){
	this.send = function(method, dataSend, cb):void {
		let request = $.ajax({
			url: dataSend.url,
			method: method,
			data: dataSend.data,
		});

		request.done(function (msg) {
			cb(msg);
		});

		request.fail(function (jqXHR, textStatus) {
			cb(jqXHR, textStatus);
		});

	}


	this.get = function(data){
		console.log("Handler::Get");
	}


	this.focusOn = function(pageName){
		console.log("FocusON")
		for (let name in Pages){
			console.log(name)
			$$(name).hide()
		}
		$$(pageName).show()
	}
}
