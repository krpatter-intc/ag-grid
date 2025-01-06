import type { ChartType } from 'ag-grid-community';
import type { AgChartsExports } from '../../../../../agChartsExports';
import type { ChartTranslationKey } from '../../../../services/chartTranslationService';
import type { ThemeTemplateParameters } from '../../miniChartsContainer';
import { MiniChartWithAxes } from '../miniChartWithAxes';
export declare class MiniStackedColumn extends MiniChartWithAxes {
    static chartType: ChartType;
    private readonly stackedColumns;
    static data: number[][];
    constructor(container: HTMLElement, agChartsExports: AgChartsExports, fills: string[], strokes: string[], _themeTemplateParameters: ThemeTemplateParameters, _isCustomTheme: boolean, data?: number[][], yScaleDomain?: number[], tooltipName?: ChartTranslationKey);
    updateColors(fills: string[], strokes: string[]): void;
}
