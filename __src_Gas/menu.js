// eslint-disable-next-line max-lines-per-function
const menu = () => {
	const ui = SpreadsheetApp.getUi();
	ui.createMenu('ICON-')
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
		.addSubMenu(
			ui
				.createMenu('paste (arkusz t01)')
				.addItem(
					'Względne - pierwsza kolumna (A)',
					'menu.paste.a1'
				)
				.addItem(
					'Względne - środkowa kolumna (B)',
					'menu.paste.a2'
				)
				.addItem(
					'Względne - ostatnia kolumna (D)',
					'menu.paste.a3'
				)
				.addItem(
					'Względne - kolumny poza zakresem (F)',
					'menu.paste.a4'
				)
				.addSeparator()
				.addItem('Względne - pierwszy wiersz (1)', 'menu.paste.b1')
				.addItem('Względne - środkowy wiersz (2)', 'menu.paste.b2')
				.addItem('Względne - ostatni wiersz (4)', 'menu.paste.b3')
				.addItem(
					'Względne - wiersza poza zakresem (7)',
					'menu.paste.b4'
				)
				.addItem(
					'Względne - wiersz jako string ("1")',
					'menu.paste.b5'
				)
				.addSeparator()
				.addItem('Bezwzględne do A1', 'menu.paste.c1')
				.addItem('Bezwzględne do B2', 'menu.paste.c2')
				.addItem('Bezwzględne D4', 'menu.paste.c3')
				.addItem('Bezwzględne poza zakresem F6', 'menu.paste.c4')
				.addSeparator()
				.addItem(
					'Przekazanie całego zakresu (A1:B2)',
					'menu.paste.ea1'
				)
				.addItem(
					'Przekazanie całego zakresu (A1:B)',
					'menu.paste.ea2'
				)
				.addItem(
					'Przekazanie całego zakresu (A1:2)',
					'menu.paste.ea3'
				)
		)
		.addSeparator()
		.addSubMenu(
			ui
				.createMenu('paste (arkusz t02)')
				.addItem(
					'Względne - pierwsza kolumna (A)',
					'menu.paste.d1'
				)
				.addItem(
					'Względne - środkowa kolumna (B)',
					'menu.paste.d2'
				)
				.addItem(
					'Względne - ostatnia kolumna (D)',
					'menu.paste.d3'
				)
				.addItem(
					'Względne - kolumny poza zakresem (F)',
					'menu.paste.d4'
				)
				.addSeparator()
				.addItem('Względne - pierwszy wiersz (1)', 'menu.paste.e1')
				.addItem('Względne - środkowy wiersz (2)', 'menu.paste.e2')
				.addItem('Względne - ostatni wiersz (4)', 'menu.paste.e3')
				.addItem(
					'Względne - wiersza poza zakresem (7)',
					'menu.paste.e4'
				)
				.addItem(
					'Względne - wiersz jako string ("1")',
					'menu.paste.e5'
				)
				.addSeparator()
				.addItem('Bezwzględne do A1', 'menu.paste.f1')
				.addItem('Bezwzględne do B2', 'menu.paste.f2')
				.addItem('Bezwzględne D4', 'menu.paste.f3')
				.addItem('Bezwzględne poza zakresem F6', 'menu.paste.f4')
		)
		.addSeparator()
		.addSubMenu(
			ui
				.createMenu('paste (arkusz t03)')
				.addItem(
					'Filter on - Wzgl - pierwsza kolumna (A)',
					'menu.paste.g1'
				)
				.addItem(
					'Filter on - Wzgl - ostatnia kolumna (E)',
					'menu.paste.g2'
				)
				.addItem(
					'Filter on - Wzgl - pierwszy wiersz (1)',
					'menu.paste.g3'
				)
				.addItem(
					'Filter on - Wzgl - wiersza poza zakresem (7)',
					'menu.paste.g4'
				)
				.addItem('Filter on - Bezwzgl do A1', 'menu.paste.g5')
				.addItem('Filter on - Bezwzgl do F6', 'menu.paste.g6')
		)
		.addSeparator()
		.addSubMenu(
			ui
				.createMenu('paste (arkusz t04)')
				.addItem('Sort 1 - pierwsza kolumna (A)', 'menu.paste.h1')
				.addItem('Sort B - pierwsza kolumna (A)', 'menu.paste.h2')
				.addItem(
					'Sort "A", order "za" - pierwsza kolumna (A)',
					'menu.paste.h3'
				)
				.addItem(
					'Sort "B", order "des" - pierwsza kolumna (A)',
					'menu.paste.h4'
				)
		)
		.addSeparator()
		.addSubMenu(
			ui
				.createMenu('paste (arkusz t05)')
				.addItem(
					"Clean 'down' - pierwsza kolumna (A)",
					'menu.paste.i1'
				)
				.addItem(
					"Clean 'right' - pierwsza kolumna (A)",
					'menu.paste.i2'
				)
				.addItem(
					"Clean 'preserve' - pierwsza kolumna (A)",
					'menu.paste.i3'
				)
				.addItem(
					"Clean 'down' - drugi wiersz (2)",
					'menu.paste.i4'
				)
				.addItem(
					"Clean 'right' - drugi wiersz (2)",
					'menu.paste.i5'
				)
				.addItem(
					"Clean 'preserve' - drugi wiersz (2)",
					'menu.paste.i6'
				)
				.addItem("Clean 'down' - A3", 'menu.paste.i7')
				.addItem("Clean 'right' - A3", 'menu.paste.i8')
				.addItem("Clean 'preserve' - A3", 'menu.paste.i9')
		)
		.addSeparator()
		.addSubMenu(
			ui
				.createMenu('paste (arkusz t06)')
				.addItem(
					'Nie usuwa empties - pierwsza kolumna (A)',
					'menu.paste.j1'
				)
				.addItem(
					'Nie usuwa empties - drugi wiersz (2)',
					'menu.paste.j2'
				)
				.addItem('Nie usuwa empties - A3', 'menu.paste.j3')
		)
		.addSeparator()
		.addItem('Test', 'tests')
		.addSeparator()
		.addItem('Update menu', 'onOpen')
		.addToUi();
};

export { menu };
