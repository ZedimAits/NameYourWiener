var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export let wienNames = [];
export function loadJSON() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("./resource/newnames.json");
            const data = yield response.json();
            parseWienJSON(data);
        }
        catch (error) {
            console.error("Error loading JSON:", error);
        }
    });
}
function parseWienJSON(data) {
    for (let i = 0; i < data.length; i++) {
        const jsonElement = data[i];
        wienNames.push({
            name: jsonElement.name,
            origin: jsonElement.info.length === 0 ? "" : jsonElement.info[0]
        });
    }
}
export const countryNames = [
    "Finnish",
    "Scandinavian",
    "Egyptian",
    "African",
    "Arabic",
    "Hebrew",
    "Greek",
    "Spanish",
    "Scottish",
    "Native American",
    "Italian",
    "Latin",
    "Anglo Saxon",
    "French",
    "Celtic",
    "Teutonic",
    "Hindi",
    "Russian",
    "Norse",
    "Irish ",
    "Gaelic",
    "Hawaiian",
    "Czech",
    "Polish",
    "Hungarian",
    "Swedish",
    "Persian",
    "Basque",
    "Portuguese",
    "Assyrian",
    "Danish",
    "Slavic",
    "Welsh",
    "Armenian",
    "Aramaic",
    "Dutch",
    "Ukrainian",
    "Turkish",
    "Japanese",
    "American",
    "Sanskrit",
    "Phoenician",
    "Yiddish",
    "Chinese"
];
export const countryEmojis = [
    "🇫🇮",
    "🇸🇪🇳🇴🇩🇰",
    "🇪🇬",
    "🌍",
    "🇸🇦🇮🇱🇪🇬",
    "🇮🇱",
    "🇬🇷",
    "🇪🇸",
    "🏴",
    "🪶",
    "🇮🇹",
    "🇻🇦",
    "🏰",
    "🇫🇷",
    "🍀",
    "⚔️",
    "🇮🇳",
    "🇷🇺",
    "🛡️",
    "☘️",
    "🇮🇪",
    "🌺",
    "🇨🇿",
    "🇵🇱",
    "🇭🇺",
    "🇸🇪",
    "🇮🇷",
    "🇪🇸",
    "🇵🇹",
    "🏛️",
    "🇩🇰",
    "🌍",
    "🏴",
    "🇦🇲",
    "✨",
    "🇳🇱",
    "🇺🇦",
    "🇹🇷",
    "🇯🇵",
    "🇺🇸",
    "🕉️",
    "🏺",
    "🇮🇱",
    "🇨🇳",
];
// function getAllOrigins(origins: string[]): void {
//     let o: string[] = [];
//     for(let i = 0; i < origins.length; i++){
//         if(origins[i] === "") continue;
//         if(!o.includes(origins[i])){
//             o.push(origins[i]);
//         }
//     }
// }
