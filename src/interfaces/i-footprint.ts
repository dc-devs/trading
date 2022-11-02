import IValueBn from './i-value-bn';

interface IFootprint {
	sellVolume: IValueBn;
	buyVolume: IValueBn;
	totalVolume: IValueBn;
	deltaVolume: IValueBn;
	[key: string]: IFootprint | IValueBn;
}

export default IFootprint;
