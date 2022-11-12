import axios from 'axios';
import {
	IWebSocketConnectData,
	IWebSocketAuthResponseData,
} from '../../../../../../../../scraps/ku-coin/src/interfaces';

enum Endpoint {
	WebSocketAuthentication = 'https://api.kucoin.com/api/v1/bullet-public',
}

interface IResponse {
	data: IWebSocketAuthResponseData;
}

interface IOptions {
	connectId: string;
}

const authenticateWebSocketConnection = async ({
	connectId,
}: IOptions): Promise<IWebSocketConnectData> => {
	const response: IResponse = await axios.post(
		Endpoint.WebSocketAuthentication,
	);
	const { data } = response;
	const { data: kuCoinData } = data;
	const { token, instanceServers } = kuCoinData;
	const instanceServer = instanceServers[0];
	const { endpoint, pingInterval } = instanceServer;

	return {
		token,
		connectId,
		pingInterval,
		instanceServer,
		connectionUrl: `${endpoint}?token=${token}&[connectId=${connectId}]`,
	};
};

export default authenticateWebSocketConnection;
