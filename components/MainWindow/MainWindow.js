function MainWindow(){

	// можно так, а можно this.init = function () {} как это сделано в других местах
	init = () =>{
		this.view = {
			button: $$('myButton')
		}
		// сюда можно напихать переменных для быстрого вызова
		// например button: $$('myButton')
		// и использовать например как this.view.button.attachEvent('onItemClick', function{})

		this.components = {
			orderTable: new ModalWindow(),
			// clientTable: new ClientTable(),
			// и тд
		};

		// инициализируем компоненты
		for (let key in this.components) {
			this.components[key].init()
		}

	}

	this.subscribe = function() {
		this.view.button.attachEvent("onItemClick", () => {
			this.components.orderTable.show()
		})
	}


	this.fetch = function(){
		// собираем данные с фронта
		// например $$('myDatatableId').getValues()
	}

	this.config = function(){
		return VMainWindow()
	}
}
