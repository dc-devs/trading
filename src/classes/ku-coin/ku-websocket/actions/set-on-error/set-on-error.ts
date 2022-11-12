import WebSocket from 'ws';
import { Message } from '../../enums';

interface IOptions {
	kuWebSocket: WebSocket;
}

const setOnError = ({ kuWebSocket }: IOptions) => {
	return (error: any) => {
		console.log(Message.ConnectionError, Message.Error, error);
		kuWebSocket.close();
	};
};

export default setOnError;
