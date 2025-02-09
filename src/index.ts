import { countryEmojis, countryNames, loadJSON, wienNames } from "./jsonloader.js";
import { jsonElement, wienElement } from "./types";

const outputText: HTMLElement = document.getElementById("output_text") as HTMLElement;
const outputName: HTMLElement = document.getElementById("output_name") as HTMLElement;
const button: HTMLElement = document.getElementById("input_button") as HTMLElement;
const textbox: HTMLInputElement = document.getElementById("input_text") as HTMLInputElement;

const emptyOutput = "Please enter a name";// that will receive a  name";    
const name_text = "Your name shall be:"
outputText.innerHTML = emptyOutput;

setup();

setTimeout(updateTextBox,200);

async function setup() : Promise<void> {
    await loadJSON();
}

button.onclick = updateTextBox;
textbox.onkeydown = (e: KeyboardEvent) => {
    if(textbox.value === "" || e.key === "Enter") updateTextBox();
};

function updateTextBox(): void {
    const textbox_text = textbox.value;

    if(textbox_text === "") {
        outputText.innerHTML = emptyOutput;
        outputName.innerHTML = "";
    }
    else {
        const newName = getWienerName(textbox_text.toLowerCase());
        outputText.innerHTML = name_text;
        outputName.classList.add("hidden");
        setTimeout(()=> {
            outputName.innerHTML = newName;
            outputName.classList.remove("hidden");
        }, 700);
        
    }
}



function getWienerName(text: string): string {
    const wienIndex: number = hash(text,wienNames.length);
    const wienElement: wienElement = wienNames[wienIndex];

    let o: string = wienElement.name;
    console.log(wienIndex);
    console.log(wienElement);


    o += getCountryString(wienElement.origin);

    return o;
}

function getCountryString(origin: string): string {
    if(origin === "") return "";

    const emojiIndex = countryNames.indexOf(origin);
    return ", " + origin + " " +countryEmojis[emojiIndex]; 
}

function hash(text: string, max: number): number{
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        const char = text.charCodeAt(i);
        hash = (hash << 5) - hash + char; // Hash formula: hash * 31 + charCode
    }
    const positive = Math.abs(hash);
    return positive % max;
}


