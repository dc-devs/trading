import { IFootprint } from '../../interfaces';
import { generateDefaultFootprint } from './actions';

interface IUpdateOptions {
	price: string;
	size: string;
	tickIndentifier: string;
}

class FootPrint {
	values: IFootprint;

	constructor() {
		this.values = generateDefaultFootprint();
	}

	update({ price, size, tickIndentifier }: IUpdateOptions) {
		console.log({ price, size, tickIndentifier, footprint: this.values });
		// update({ price, footprint: this.values });
	}
}

export default FootPrint;
