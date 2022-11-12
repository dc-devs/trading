import BigNumber from 'bignumber.js';

interface ITickValueOptions {
	value: BigNumber;
}

class TickValue {
	value: string;
	bn: BigNumber;

	constructor({ value }: ITickValueOptions) {
		this.bn = value;
		this.value = value.toString();
	}

	set({ value }: ITickValueOptions) {
		this.bn = value;
		this.value = value.toString();
	}
	
	add({ value }: ITickValueOptions) {
		this.bn = this.bn.plus(value);
		this.value = this.bn.toString();
	}
	
	subtract({ value }: ITickValueOptions) {
		this.bn = this.bn.minus(value);
		this.value = this.bn.toString();
	}
}

export default TickValue;
