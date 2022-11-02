import { ISetValueOptions } from '../interfaces';

const setValueBn = ({ property, priceBn }: ISetValueOptions) => {
	property.bn = priceBn;
	property.value = priceBn.toString();
};

export default setValueBn;
