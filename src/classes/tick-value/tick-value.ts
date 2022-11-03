import BigNumber from 'bignumber.js';

interface ITickValueOptions {
	priceBn: BigNumber;
}

class TickValue {
	value: string;
	bn: BigNumber;

	constructor({ priceBn }: ITickValueOptions) {
		this.bn = priceBn;
		this.value = priceBn.toString();
	}

	update({ priceBn }: ITickValueOptions) {
		this.bn = priceBn;
		this.value = priceBn.toString();
	}
}

export default TickValue;
