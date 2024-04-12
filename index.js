import './src/features/autowarp';
import './src/features/notifications';

import { setRegisters } from "./src/util/functions";
import { data } from "./data";
import Settings from "./config";
import constants from "./src/util/constanst";

data.autosave()

register("command", () => { Settings.openGUI() })
    .setName("shafty")
    .setAliases("sy");

// Info message for first timers
if (data.first_time) {
    data.first_time = false;
    data.save();
    ChatLib.chat("");
    ChatLib.chat(`${constants.PREFIX}`);
    ChatLib.chat(new Message(`&bUse `, new TextComponent("&9&l[/sy]&r").setClick("run_command", "/sy"), ` &bFor settings!`));
    ChatLib.chat("");
};

// Keeping track of pet
register("chat", (pet) => {
    pet = pet.replace(" ✦", "")
    data.pet = pet
    data.save()
}).setCriteria("Autopet equipped your [${*}] ${pet}! VIEW RULE");

register("chat", (pet) => {
    pet = pet.replace(" ✦", "")
    data.pet = pet
    data.save()
}).setCriteria("You summoned your ${pet}!");

register("chat", () => {
    data.pet = ""
    data.save()
}).setCriteria("You despawned your ${*}!");

register("guiClosed", (event) => {
    if (event?.toString()?.includes("vigilance")) {
        setRegisters()
    }
});

data.name = Player.getName().toLowerCase()
data.save();