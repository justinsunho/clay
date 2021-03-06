import Chart from './Chart';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * Scatter Chart component.
 * @augments Chart
 */
class ScatterChart extends Chart {}

ScatterChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @default scatter
	 * @instance
	 * @memberof ScatterChart
	 * @type {?(string|undefined)}
	 */
	type: Config.oneOf(types.point).value('scatter'),
};

export {ScatterChart};
export default ScatterChart;
