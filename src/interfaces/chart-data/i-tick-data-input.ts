import { Side } from '../../enums';

interface ITickDataInput {
	price: string;
	size: string;
	side: Side;
	timestamp: number;
}

export default ITickDataInput;
