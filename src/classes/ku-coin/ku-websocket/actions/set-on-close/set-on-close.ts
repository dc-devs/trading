import { Message } from '../../enums';

const setOnClose = () => {
	return (event: any) => {
		if (event.wasClean) {
			console.log(
				Message.ConnectionClosedCleanly,
				Message.Code,
				event.code,
			);
		} else {
			console.log(Message.ConnectionDied, Message.Code, event.code);
		}
	};
};

export default setOnClose;
