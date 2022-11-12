import { Topic, Channel } from '../enums';
import { generateSubscriptionMessage, generatePingMessage } from './utils';

interface ISubscribeOptions {
	symbol: string;
}

interface IKuGenerateMessageOptions {
	connectId: string;
}

class KuGenerateMessage {
	connectId: string;

	constructor({ connectId }: IKuGenerateMessageOptions) {
		this.connectId = connectId;
	}

	orderBookSubscription = ({ symbol }: ISubscribeOptions) => {
		return generateSubscriptionMessage({
			symbol,
			topic: Topic.Level2,
			channel: Channel.Market,
			connectId: this.connectId,
		});
	};

	matchExecutionSubscription = ({ symbol }: ISubscribeOptions) => {
		return generateSubscriptionMessage({
			symbol,
			topic: Topic.Match,
			channel: Channel.Market,
			connectId: this.connectId,
		});
	};

	ping = () => {
		return generatePingMessage({ connectId: this.connectId });
	};
}

export default KuGenerateMessage;
