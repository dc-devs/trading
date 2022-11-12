import { Side } from '../../../enums';
import { convertNanoToMs } from '../../../utils';
import { ITickDataInput, IMatchExecutionMessage } from '../../../interfaces';

interface IOptions {
	message: string;
}

class KuMessageParser {
	static executionMessageToTickDataInput = ({
		message,
	}: IOptions): ITickDataInput => {
		const parsedMessage: IMatchExecutionMessage = JSON.parse(message);
		const { data } = parsedMessage;
		const { side: sideString, time, size, price } = data;
		const timestamp = convertNanoToMs({ nanoseconds: time });
		const side = sideString as Side;

		return {
			size,
			side,
			price,
			timestamp,
		};
	};
}

export default KuMessageParser;
