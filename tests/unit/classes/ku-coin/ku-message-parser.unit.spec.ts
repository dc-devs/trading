import { IMatchExecutionMessage } from '../../../../src/interfaces';
import KuMessageParser from '../../../../src/classes/ku-coin/ku-message-parser';

describe('KuMessageParser', () => {
	it('should be defined', () => {
		expect(KuMessageParser).toBeDefined();
	});

	describe('executionMessageToTickDataInput', () => {
		it('should be a function', () => {
			expect(typeof KuMessageParser.executionMessageToTickDataInput).toBe(
				'function',
			);
		});

		describe('when called with an ku-coin match execution message', () => {
			it('should conver it to tickData input', () => {
				const expectedTickDataInput = {
					size: '2.5232',
					side: 'buy',
					price: '0.9133',
					timestamp: 1667233108782,
				};
				const matchExecutionMessage: IMatchExecutionMessage = {
					type: 'message',
					topic: '/market/match:MATIC-USDT',
					subject: 'trade.l3match',
					data: {
						makerOrderId: '635fd3e0c4c3e100013ad7d3',
						price: '0.9133',
						sequence: '426169443307521',
						side: 'buy',
						size: '2.5232',
						symbol: 'MATIC-USDT',
						takerOrderId: '635ff5545f52390001d14ad6',
						time: '1667233108782000000',
						tradeId: '426169443307521',
						type: 'match',
					},
				};

				const tickDataInput =
					KuMessageParser.executionMessageToTickDataInput({
						message: JSON.stringify(matchExecutionMessage),
					});

				expect(tickDataInput).toEqual(expectedTickDataInput);
			});
		});
	});
});
