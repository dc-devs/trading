import Tick from '../../tick';
import { Side } from '../../../../enums';
import { ITickData } from '../../../../interfaces';

interface IUpdateOptions {
	price: string;
	size: string;
	side: Side;
	ticks: ITickData;
	tickIndetifier: string;
}

const update = ({
	side,
	size,
	ticks,
	price,
	tickIndetifier,
}: IUpdateOptions) => {
	if (!ticks[tickIndetifier]) {
		ticks[tickIndetifier] = new Tick();
	}

	ticks[tickIndetifier].update({
		price,
		size,
		side,
	});
};

export default update;
