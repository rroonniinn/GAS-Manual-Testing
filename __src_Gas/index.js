import { menu } from './menu';
import { disp } from '../../GAS | Library/v01/gas/disp';
import { clearContent } from '../../GAS | Library/v02/gas/manualTesting/clearContent';
import { sortColumn } from '../../GAS | Library/v02/gas/manualTesting/sortColumn';

global.tests = () => {
	disp('Hello');
};

global.menu = {
	clearContent,
	sortColumn,
};

global.onOpen = () => {
	menu();
};
