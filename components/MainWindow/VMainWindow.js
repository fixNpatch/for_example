function VMainWindow() {
	return {
		id: "assessmentList",
		rows: [
			{
				view: 'toolbar',
				elements: [
					{
						view: "datepicker",
						placeholder: "Search..",
						width: 300,
						height: 50,
						id: "assessmentSearch",
						format: webix.Date.dateToStr("%y-%m-%d"),
						stringResult: true,
					}, {},
					{
						view: "button",
						width: 150,
						value: 'Создать',
						popup: "add_asses",
						height: 50
					},
					{
						view: "button",
						id: "deleteAsses",
						value: "Удалить",
					},
					{
						view: "button",
						id: "SaveAsses",
						value: "Сохранить",
					}
				]
			},
			{
				cols: [
					{
						view: "datatable",
						select: "row",
						height: 500,
						width: 300,
						id: "assessmentTable",
						autoConfig: true,
						scroll: "y",
						columns: [
							{
								sort: "string",
								id: "Date",
								header: "Дата ассессмента",
								fillspace: true
							}]
					},
					{
						padding: 20,
						rows: [
							{
								view: "datepicker",
								timepicker: true,
								stringResult: true,
								labelWidth: 150,
								label: "Дата",
								scrollX: false,
								fillspace: true,
								id: "infoAssesDate"
							},
							{
								borderless: true,
								view: "tabbar",
								id: "tabbarAssessment",
								multiview: true,
								options: [
									{value: 'Кандидаты', id: 'studentCell'},
									{value: 'Сотрудники', id: 'employeeCell'}
								]
							},
							{
								cells: [
									EmployeeInAssessmentPage.config(),
									CandidateInAssessmentPage.config(),
								]
							},

						]
					}
				]
			}
		]
	}
}
