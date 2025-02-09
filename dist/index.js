var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { countryEmojis, countryNames, loadJSON, wienNames } from "./jsonloader.js";
const outputText = document.getElementById("output_text");
const outputName = document.getElementById("output_name");
const button = document.getElementById("input_button");
const textbox = document.getElementById("input_text");
const emptyOutput = "Please enter a name"; // that will receive a  name";    
const name_text = "Your name shall be:";
outputText.innerHTML = emptyOutput;
setup();
setTimeout(updateTextBox, 200);
function setup() {
    return __awaiter(this, void 0, void 0, function* () {
        yield loadJSON();
    });
}
button.onclick = updateTextBox;
textbox.onkeydown = (e) => {
    if (textbox.value === "" || e.key === "Enter")
        updateTextBox();
};
function updateTextBox() {
    const textbox_text = textbox.value;
    if (textbox_text === "") {
        outputText.innerHTML = emptyOutput;
        outputName.innerHTML = "";
    }
    else {
        const newName = getWienerName(textbox_text.toLowerCase());
        outputText.innerHTML = name_text;
        outputName.classList.add("hidden");
        setTimeout(() => {
            outputName.innerHTML = newName;
            outputName.classList.remove("hidden");
        }, 700);
    }
}
function getWienerName(text) {
    const wienIndex = hash(text, wienNames.length);
    const wienElement = wienNames[wienIndex];
    let o = wienElement.name;
    console.log(wienIndex);
    console.log(wienElement);
    o += getCountryString(wienElement.origin);
    return o;
}
function getCountryString(origin) {
    if (origin === "")
        return "";
    const emojiIndex = countryNames.indexOf(origin);
    return ", " + origin + " " + countryEmojis[emojiIndex];
}
function hash(text, max) {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        const char = text.charCodeAt(i);
        hash = (hash << 5) - hash + char; // Hash formula: hash * 31 + charCode
    }
    const positive = Math.abs(hash);
    return positive % max;
}
