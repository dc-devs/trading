import Tick from '../../tick';
import { Side } from '../../../enums';
import { ITickData } from '../../../interfaces';

interface IUpdateOptions {
	price: string;
	size: string;
	side: Side;
	tickData: ITickData;
	tickIndetifier: string;
}

const update = ({
	tickData,
	price,
	size,
	side,
	tickIndetifier,
}: IUpdateOptions) => {
	let currentTick = tickData[tickIndetifier];

	if (!currentTick) {
		currentTick = new Tick();
	}

	currentTick.update({
		price,
		size,
		side,
	});

	console.log({ tickData, price, size, side, tickIndetifier });
};

export default update;
