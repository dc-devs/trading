import { Side } from '../../../enums';
import { update } from './actions';
import { IFootprint } from '../../../interfaces';
import { generateDefaultFootprint } from './actions';

interface IUpdateOptions {
	size: string;
	side: Side;
}

class FootPrint {
	values: IFootprint;

	constructor() {
		this.values = generateDefaultFootprint();
	}

	update({ size, side }: IUpdateOptions) {
		update({ size, side, footprint: this.values });
	}
}

export default FootPrint;
