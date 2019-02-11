export declare module Chart {
    interface IChartService {
        renderDonutDiagram(): string;
    }
    class ChartService implements IChartService {
        renderDonutDiagram(): string;
        EMOJI_SHORTCODES: RegExp;
        findEmojis(str: string): string;
    }
}
