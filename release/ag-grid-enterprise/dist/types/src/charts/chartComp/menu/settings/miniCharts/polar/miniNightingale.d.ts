import type { ChartType } from 'ag-grid-community';
import type { AgChartsExports } from '../../../../../agChartsExports';
import { MiniChartWithPolarAxes } from '../miniChartWithPolarAxes';
export declare class MiniNightingale extends MiniChartWithPolarAxes {
    static chartType: ChartType;
    private readonly series;
    private data;
    constructor(container: HTMLElement, agChartsExports: AgChartsExports, fills: string[], strokes: string[]);
    updateColors(fills: string[], strokes: string[]): void;
}
