interface IOptions {
	size: string;
	price: string;
	timestamp: string;
}

const update = ({ size, price, timestamp }: IOptions) => {
	console.log({ size, price, timestamp });
	// const currentTime = getFormattedTime({ timestamp });
	// const sizeBN = new BigNumber(size);
	// const priceBN = new BigNumber(price);
};

export default update;
