function App() {

	let Pages =  {
		MainWindow: "MainWindow",
		VAuth: "VAuth",
	}


	this.init = function(){
		this.handler = new Handler()
		this.components = {
			MainWindow: new MainWindow()
			// и другие компоненты. Это могут быть модальные окна, таблицы.
			// Всё что можно разделить на отдельные компоненты
		};

		// конфигурируем приложение
		this.config()
	}

	this.config = function(){
		// загружаем представления и сразу их прячем
		for (let key in this.components) {
			webix.ui(this.components[key].config()).hide()
		}

		// инициализируем компоненты
		for (let key in this.components) {
			this.components[key].init()
		}

		// вешаем обработчики событий
		for (let key in this.components) {
			this.components[key].subscribe()
		}

		// после конфигурации запускаем его
		this.run()
	}


	this.run = function(){
		console.log(window.location.pathname)


		if (window.location.pathname !== "/auth") {
			this.handler.focusOn(Pages.MainWindow)
		} else {
			this.handler.focusOn(Pages.VAuth)
		}

		console.log("App::Run...")
	}
}
