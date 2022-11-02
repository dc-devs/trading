import { IFootprint } from '../../interfaces';
import { generateDefaultFootprint } from './actions';

interface IUpdateOptions {
	price: string;
	size: string;
	timestamp: string;
}

class FootPrint {
	values: IFootprint;

	constructor() {
		this.values = generateDefaultFootprint();
	}

	update({ price, size, timestamp }: IUpdateOptions) {
		console.log({ price, size, timestamp });
		// update({ price, FootPrint: this.values });
	}
}

export default FootPrint;
