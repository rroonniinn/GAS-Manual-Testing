import { disp } from '../../GAS | Library/v01/gas/disp';
import { clearContent } from '../../GAS | Library/v02/gas/manualTesting/clearContent';
import { sortColumn } from '../../GAS | Library/v02/gas/manualTesting/sortColumn';
import { paste } from '../../GAS | Library/v02/gas/manualTesting/paste';

import { menu } from './menu';

global.tests = () => {
	disp('Hello');
};

global.menu = {
	clearContent,
	sortColumn,
	paste,
};

global.onOpen = () => {
	menu();
};
