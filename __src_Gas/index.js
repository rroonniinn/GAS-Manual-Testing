import { setMenu } from '../../../00. My Library/v02/gas/setMenu';
import { clearContent } from '../../../00. My Library/v02/gas/manualTesting/clearContent';
import { sortColumn } from '../../../00. My Library/v02/gas/manualTesting/sortColumn';
import { paste } from '../../../00. My Library/v02/gas/manualTesting/paste';
import { styleSpreadsheet } from '../../../00. My Library/v02/gas/manualTesting/styleSpreadsheet';
import { styleSheet } from '../../../00. My Library/v02/gas/manualTesting/styleSheet';
import { buildResultsFiles } from '../../../00. My Library/v02/experiments/manualTesting/buildResultsFiles';
import { buildLocal } from '../../../00. My Library/v02/experiments/manualTesting/buildLocal';
import { buildHub } from '../../../00. My Library/v02/experiments/manualTesting/buildHub';
import { buildExternals } from '../../../00. My Library/v02/experiments/manualTesting/buildExternals';
import { buildStructure } from '../../../00. My Library/v02/experiments/manualTesting/buildStructure';
import { crusherProps } from '../../../00. My Library/v02/gas/manualTesting/crusherProps';
import { crusherCache } from '../../../00. My Library/v02/cache/manualTesting/crusherCache';

// @ts-ignore
global.pub = {
	tests: () => {},
	clearContent,
	sortColumn,
	paste,
	styleSpreadsheet,
	styleSheet,
	buildResultsFiles,
	buildLocal,
	buildHub,
	buildExternals,
	buildStructure,
	crusherProps,
	crusherCache,
};

const menuElements = [
	['clearContent', ['Uruchom test', 'pub.clearContent']],
	'---------------',
	[
		'sortColumn',
		['Kol. A sort A - Z (arkusza a)', 'pub.sortColumn.a1'],
		['Kol. A sort Z - A (arkusza a)', 'pub.sortColumn.a2'],
		['Kol. B sort A - Z (arkusza a)', 'pub.sortColumn.a3'],
		['Kol. B sort Z - A (arkusza a)', 'pub.sortColumn.a4'],
		['Kol. B sort A - Z (arkusza a) (no param)', 'pub.sortColumn.a5'],
		'---------------',
		['Kol. A sort A - Z (arkusza b)', 'pub.sortColumn.b1'],
		['Kol. A sort Z - A (arkusza b)', 'pub.sortColumn.b2'],
		['Kol. B sort A - Z (arkusza b)', 'pub.sortColumn.b3'],
		['Kol. B sort Z - A (arkusza b)', 'pub.sortColumn.b4'],
		'---------------',
		['Kolumna poza zakresem (arkusza a)', 'pub.sortColumn.e1'],
		'---------------',
		['Błędny param (true) (sort) (arkusza a)', 'pub.sortColumn.e2'],
		['Błędny param (dsdsds) (sort) (arkusza a)', 'pub.sortColumn.e3'],
		['Błędny param - "1" - (col) (arkusza a)', 'pub.sortColumn.e4'],
		['Błędny param - A3 - (col) (arkusza a)', 'pub.sortColumn.e5'],
		['Błędny param - A3:B5 - (col) (arkusza a)', 'pub.sortColumn.e6'],
	],
	'---------------',
	[
		'paste (arkusz t01)',
		['Względne - pierwsza kolumna (A)', 'pub.paste.a1'],
		['Względne - środkowa kolumna (B)', 'pub.paste.a2'],
		['Względne - ostatnia kolumna (D)', 'pub.paste.a3'],
		['Względne - kolumny poza zakresem (F)', 'pub.paste.a4'],
		'---',
		['Względne - pierwszy wiersz (1)', 'pub.paste.b1'],
		['Względne - środkowy wiersz (2)', 'pub.paste.b2'],
		['Względne - ostatni wiersz (4)', 'pub.paste.b3'],
		['Względne - wiersza poza zakresem (7)', 'pub.paste.b4'],
		['Względne - wiersz jako string ("1")', 'pub.paste.b5'],
		'---',
		['Bezwzględne do A1', 'pub.paste.c1'],
		['Bezwzględne do B2', 'pub.paste.c2'],
		['Bezwzględne D4', 'pub.paste.c3'],
		['Bezwzględne poza zakresem F6', 'pub.paste.c4'],
		'---',
		['Przekazanie całego zakresu (A1:B2)', 'pub.paste.ea1'],
		['Przekazanie całego zakresu (A1:B)', 'pub.paste.ea2'],
		['Przekazanie całego zakresu (A1:2)', 'pub.paste.ea3'],
	],
	'------------------',
	[
		'paste (arkusz t02)',
		['Względne - pierwsza kolumna (A)', 'pub.paste.d1'],
		['Względne - środkowa kolumna (B)', 'pub.paste.d2'],
		['Względne - ostatnia kolumna (D)', 'pub.paste.d3'],
		['Względne - kolumny poza zakresem (F)', 'pub.paste.d4'],
		'------------------',
		['Względne - pierwszy wiersz (1)', 'pub.paste.e1'],
		['Względne - środkowy wiersz (2)', 'pub.paste.e2'],
		['Względne - ostatni wiersz (4)', 'pub.paste.e3'],
		['Względne - wiersza poza zakresem (7)', 'pub.paste.e4'],
		['Względne - wiersz jako string ("1")', 'pub.paste.e5'],
		'--------------------',
		['Bezwzględne do A1', 'pub.paste.f1'],
		['Bezwzględne do B2', 'pub.paste.f2'],
		['Bezwzględne D4', 'pub.paste.f3'],
		['Bezwzględne poza zakresem F6', 'pub.paste.f4'],
	],
	'------------------',
	[
		'paste (arkusz t03)',
		['Filter on - Wzgl - pierwsza kolumna (A)', 'pub.paste.g1'],
		['Filter on - Wzgl - ostatnia kolumna (E)', 'pub.paste.g2'],
		['Filter on - Wzgl - pierwszy wiersz (1)', 'pub.paste.g3'],
		['Filter on - Wzgl - wiersza poza zakresem (7)', 'pub.paste.g4'],
		['Filter on - Bezwzgl do A1', 'pub.paste.g5'],
		['Filter on - Bezwzgl do F6', 'pub.paste.g6'],
	],
	'------------------',
	[
		'paste (arkusz t04)',
		['Sort 1 - pierwsza kolumna (A)', 'pub.paste.h1'],
		['Sort B - pierwsza kolumna (A)', 'pub.paste.h2'],
		['Sort "A", order "za" - pierwsza kolumna (A)', 'pub.paste.h3'],
		['Sort "B", order "des" - pierwsza kolumna (A)', 'pub.paste.h4'],
	],
	'------------------',
	[
		'paste (arkusz t05)',
		["Clean 'down' - pierwsza kolumna (A)", 'pub.paste.i1'],
		["Clean 'right' - pierwsza kolumna (A)", 'pub.paste.i2'],
		["Clean 'preserve' - pierwsza kolumna (A)", 'pub.paste.i3'],
		["Clean 'down' - drugi wiersz (2)", 'pub.paste.i4'],
		["Clean 'right' - drugi wiersz (2)", 'pub.paste.i5'],
		["Clean 'preserve' - drugi wiersz (2)", 'pub.paste.i6'],
		["Clean 'down' - A3", 'pub.paste.i7'],
		["Clean 'right' - A3", 'pub.paste.i8'],
		["Clean 'preserve' - A3", 'pub.paste.i9'],
	],
	'------------------',
	[
		'paste (arkusz t06)',
		['Nie usuwa empties - pierwsza kolumna (A)', 'pub.paste.j1'],
		['Nie usuwa empties - drugi wiersz (2)', 'pub.paste.j2'],
		['Nie usuwa empties - A3', 'pub.paste.j3'],
	],
	'------------------',
	[
		'styleSpreadsheet',
		['Formatowanie obu arkuszy', 'pub.styleSpreadsheet.a1'],
	],
	'------------------',
	[
		'styleSheet',
		['Ark: "all" - Wszystkie opcje', 'pub.styleSheet.a1'],
		['Ark: "merge" - Wszystkie opcje merge ', 'pub.styleSheet.b1'],
		['Ark: "merge" - Wyłączenie merge ', 'pub.styleSheet.b2'],
		['Ark: "wrap" - Wszystkie opcje', 'pub.styleSheet.c1'],
		['Ark: "fontFormatNum" - Wszystkie opcje', 'pub.styleSheet.d1'],
	],
	'------------------',
	[
		'buildResultsFiles',
		['Utworzenie plików z wynikami', 'pub.buildResultsFiles.a1'],
	],
	'------------------',
	[
		'buildLocal',
		[
			'Utworzenie lokalnie arkuszy z danymi randomowymi (bez usuwania innych)',
			'pub.buildLocal.a1',
		],
	],
	'------------------',
	['buildHub', ['Utworzenie pliku Hub', 'pub.buildHub.a1']],
	'------------------',
	[
		'buildExternals',
		['Utworzenie plików externals', 'pub.buildExternals.a1'],
	],
	'------------------',
	[
		'crusherCache',
		['Zapisanie do Cacha', 'pub.crusherCache.a1'],
		['Odczytanie z Cacha', 'pub.crusherCache.b1'],
	],
	'------------------',
	[
		'crusherProps',
		['Zapisanie do propsów BIG', 'pub.crusherProps.a1'],
		['Zapisanie do propsów SMALL', 'pub.crusherProps.a2'],
		['Odczytanie z propsów', 'pub.crusherProps.b1'],
	],
	'------------------',
	['Test', 'pub.tests'],
	'------------------',
	['Update menu', 'onOpen'],
];

// @ts-ignore
global.onOpen = () => {
	setMenu(menuElements, 'ICON', true);
};
