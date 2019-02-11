export class ChartService {

    EMOJI_SHORTCODES = /:[a-zA-Z1-9_]+:/g
    
    findEmojis(str: string): string {
    // add runtime check for use in JavaScript
    if (typeof str !== 'string') {
        return "";
    }

    return "blaat";
    }
}