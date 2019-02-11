export class ChartService implements IChartService  {
    public renderDonutDiagram(): string {
        return "this is a donut";
    }

    public EMOJI_SHORTCODES = /:[a-zA-Z1-9_]+:/g

    public findEmojis(str: string): string {
    // add runtime check for use in JavaScript
    if (typeof str !== 'string') {
        return "";
    }

    return "blaat";
    }
}