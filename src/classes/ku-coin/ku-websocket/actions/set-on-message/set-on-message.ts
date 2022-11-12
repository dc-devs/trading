import { Message } from '../../enums';
import { getFormattedTime } from '../../../../../utils';
import KuMessageParser from '../../../ku-message-parser';

enum MessageIdentifer {
	Error = 'error',
	KuCoinMessage = '"id":',
	Level2 = `"topic":"/market/level2`,
	MatchExecution = `"topic":"/market/match`,
}

interface IOptions {
	onErrorMessage: CallableFunction;
	onLevel2Message: CallableFunction;
	onExecutionOrder: CallableFunction;
}

const setOnMessage = ({
	onErrorMessage,
	onLevel2Message,
	onExecutionOrder,
}: IOptions) => {
	return (event: any) => {
		const { data: message } = event;
		const messageIsString = typeof message === 'string';

		if (messageIsString) {
			if (message.includes(MessageIdentifer.KuCoinMessage)) {
				console.log(Message.MessageRecieved, message);
			}

			if (message.includes(MessageIdentifer.Error)) {
				console.error(Message.MessageRecieved, message);
				onErrorMessage({ message });
			}

			if (message.includes(MessageIdentifer.Level2)) {
				onLevel2Message({ message });
			}

			if (message.includes(MessageIdentifer.MatchExecution)) {
				const { size, side, price, timestamp } =
					KuMessageParser.executionMessageToTickDataInput({
						message,
					});
				const tickIndentifier = getFormattedTime({ timestamp });

				onExecutionOrder({ size, side, price, tickIndentifier });
			}
		}
	};
};

export default setOnMessage;
