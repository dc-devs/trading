import { Type, Topic, Channel } from '../../enums';

interface IOptions {
	topic: Topic;
	symbol: string;
	channel: Channel;
	connectId: string;
}

const generateSubscriptionMessage = ({
	topic,
	symbol,
	channel,
	connectId,
}: IOptions) => {
	const subscriptionMessage = JSON.stringify({
		id: connectId,
		response: true,
		type: Type.Subscribe,
		topic: `/${channel}/${topic}:${symbol}`,
	});

	return subscriptionMessage;
};

export default generateSubscriptionMessage;
