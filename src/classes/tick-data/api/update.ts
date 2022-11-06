import { ITickData } from '../../../interfaces';

interface IUpdateOptions {
	price: string;
	size: string;
	side: string;
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
	console.log({ tickData, price, size, side, tickIndetifier });
};

export default update;
