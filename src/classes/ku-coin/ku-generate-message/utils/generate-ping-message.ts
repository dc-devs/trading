import { Type } from '../../enums';

interface IOptions {
	connectId: string;
}

const generatePingMessage = ({ connectId }: IOptions) => {
	return JSON.stringify({
		id: connectId,
		type: Type.Ping,
	});
};

export default generatePingMessage;
