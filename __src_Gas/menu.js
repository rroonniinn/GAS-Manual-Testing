// eslint-disable-next-line max-lines-per-function
const menu = () => {
	const ui = SpreadsheetApp.getUi();
	ui.createMenu('ICON')
		.addSubMenu(
			ui
				.createMenu('clearContent')
				.addItem('Uruchom test', 'menu.clearContent')
		)
		.addSeparator()
		.addSubMenu(
			ui
				.createMenu('sortColumn')
				.addItem(
					'Kolumna A posortowana od A - Z (arkusza a)',
					'menu.sortColumn.a1'
				)
				.addItem(
					'Kolumna A posortowana od Z - A (arkusza a)',
					'menu.sortColumn.a2'
				)
				.addItem(
					'Kolumna B posortowana od A - Z (arkusza a)',
					'menu.sortColumn.a3'
				)
				.addItem(
					'Kolumna B posortowana od Z - A (arkusza a)',
					'menu.sortColumn.a4'
				)
				.addItem(
					'Kolumna B posortowana od A - Z (brak parametru) (arkusza a)',
					'menu.sortColumn.a5'
				)
				.addSeparator()
				.addItem(
					'Kolumna A posortowana od A - Z (arkusza b)',
					'menu.sortColumn.b1'
				)
				.addItem(
					'Kolumna A posortowana od Z - A (arkusza b)',
					'menu.sortColumn.b2'
				)
				.addItem(
					'Kolumna B posortowana od A - Z (arkusza b)',
					'menu.sortColumn.b3'
				)
				.addItem(
					'Kolumna B posortowana od Z - A (arkusza b)',
					'menu.sortColumn.b4'
				)
				.addSeparator()
				.addItem(
					'Kolumna poza zakresem (arkusza a)',
					'menu.sortColumn.e1'
				)
				.addSeparator()
				.addItem(
					'Błędny parametr - true - (sort) (arkusza a)',
					'menu.sortColumn.e2'
				)
				.addItem(
					'Błędny parametr - dsdsds - (sort) (arkusza a)',
					'menu.sortColumn.e3'
				)
				.addItem(
					'Błędny parametr - "1" - (col) (arkusza a)',
					'menu.sortColumn.e4'
				)
				.addItem(
					'Błędny parametr - A3 - (col) (arkusza a)',
					'menu.sortColumn.e5'
				)
				.addItem(
					'Błędny parametr - A3:B5 - (col) (arkusza a)',
					'menu.sortColumn.e6'
				)
		)
		.addSeparator()
		.addItem('Test', 'tests')
		.addSeparator()
		.addItem('Update menu', 'onOpen')
		.addToUi();
};

export { menu };
