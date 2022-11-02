import BigNumber from "bignumber.js";
import IValueBn from "./i-value-bn";

interface ISetValueOptions {
	property: IValueBn;
	priceBn: BigNumber;
}

export default ISetValueOptions;