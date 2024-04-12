import Settings from "./../../config"
import { registerWhen, timer } from "../util/functions";

let cooldown = 0
const display = new Display();
display.setRenderLoc(10, 20);

const abilities = ["Mining Speed Boost", "Pickobulus", "Vein Seeker", "Maniac Miner", "Gemstone Infusion", "Hazardous Miner"]
const cooldowns = [120, 110, 60, 59, 140, 140]

registerWhen(
    register("chat", (ability, event) => {
    }).setCriteria("Your ${ability} has expired!"),
    () => Settings.abilityCooldown
)

registerWhen(
    register("chat", (ability, event) => {
        console.log("ability ", ability)
        ChatLib.chat(ability)
        index = abilities.indexOf(ability);
        if (index == -1) return;
        cooldown = cooldowns[index]

        timer(cooldown, display, "CD: {time}");

    }).setCriteria("You used your ${ability} Pickaxe Ability!"),
    () => Settings.abilityCooldown
)

registerWhen(
    register("renderWorld", () => {
        cooldown = 60
        timer(cooldown, display, "CD: {time}");
    }),
    () => Settings.abilityCooldown
)