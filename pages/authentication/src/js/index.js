// // Index JS
import { handleTabs } from "./tabs.js";
import { handleInput } from "./textbox.js";

// runs all the js files
const runScripts = () => {
	handleTabs("authentication", "horizontal");
	handleInput();
};
runScripts();
