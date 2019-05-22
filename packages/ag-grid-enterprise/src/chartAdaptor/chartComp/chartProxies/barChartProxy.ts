import { ChartBuilder } from "../../builder/chartBuilder";
import { BarChartOptions, BarSeriesOptions, ChartType } from "ag-grid-community";
import { BarSeries } from "../../../charts/chart/series/barSeries";
import { ChartProxy, UpdateChartParams, ChartProxyOptions } from "./chartProxy";
import borneo, { palettes } from "../../../charts/chart/palettes";

export class BarChartProxy extends ChartProxy {

    public constructor(options: ChartProxyOptions) {
        super(options);

        const chartOptions = this.getChartOptions(this.defaultOptions()) as BarChartOptions;
        this.chart = ChartBuilder.createBarChart(chartOptions);

        const barSeries = ChartBuilder.createSeries(chartOptions.seriesDefaults as BarSeriesOptions);
        if (barSeries) {
            this.chart.addSeries(barSeries);
        }
    }

    public update(params: UpdateChartParams): void {
        const barSeries = this.chart.series[0] as BarSeries;

        barSeries.data = params.data;
        barSeries.xField = params.categoryId;
        barSeries.yFields = params.fields.map(f => f.colId);
        barSeries.yFieldNames = params.fields.map(f => f.displayName);

        barSeries.fills = palettes[this.options.getPalette()].fills;
    }

    private defaultOptions(): BarChartOptions {
        return {
            type: 'bar',
            parent: this.options.parentElement,
            width: this.options.width,
            height: this.options.height,
            padding: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            },
            xAxis: {
                type: 'category',
                labelFont: '12px Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                tickSize: 6,
                tickWidth: 1,
                tickPadding: 5,
                lineColor: 'rgba(195, 195, 195, 1)',
                lineWidth: 1,
                gridStyle: [{
                    strokeStyle: this.getAxisGridColor(),
                    lineDash: [4, 2]
                }]
            },
            yAxis: {
                type: 'number',
                labelFont: '12px Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                tickSize: 6,
                tickWidth: 1,
                tickPadding: 5,
                lineColor: 'rgba(195, 195, 195, 1)',
                lineWidth: 1,
                gridStyle: [{
                    strokeStyle: this.getAxisGridColor(),
                    lineDash: [4, 2]
                }]
            },
            legend: {
                labelFont: '12px Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                itemPaddingX: 16,
                itemPaddingY: 8,
                markerPadding: 4,
                markerSize: 14,
                markerLineWidth: 1
            },
            seriesDefaults: {
                type: 'bar',
                fills: borneo.fills,
                strokes: borneo.strokes,
                grouped: this.options.chartType === ChartType.GroupedBar,
                lineWidth: 1,
                tooltipEnabled: true,
                labelFont: '12px Verdana, sans-serif',
                labelColor: this.getLabelColor(),
                labelPadding: {x: 10, y: 10},
                tooltipRenderer: undefined,
                showInLegend: true
            }
        };
    }
}
