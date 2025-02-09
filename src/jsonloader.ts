import { jsonElement, wienElement } from "./types";

export let wienNames: wienElement[] = [];

export async function loadJSON(): Promise<void> {
    try {
        const response = await fetch("./resource/newnames.json");
        const data: jsonElement[] = await response.json();
        parseWienJSON(data);
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
}

function parseWienJSON(data: jsonElement[]): void{
    for(let i = 0; i < data.length; i++){
        const jsonElement: jsonElement = data[i];

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
"Irish",
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
