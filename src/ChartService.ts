import { IChartService } from 'jsksswo-charting';
export module JsksCharting {

    export class ChartService implements IChartService {
        renderDonutDiagram(): string {
            return 'this is a donut diagram';
        }      
    }
}