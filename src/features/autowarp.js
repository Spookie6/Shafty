import Settings from "./../../config"
import { registerWhen, delay } from "../util/functions";

registerWhen(
    register("chat", () => {
        delay(() => { ChatLib.command('pc >transfer') }, 500);
        delay(() => { ChatLib.command('pc [MINESHAFT] - Warping in 5 seconds!') }, 1000);
        delay(() => { ChatLib.command('p warp') }, 6500);
    }).setCriteria("${player} entered the mineshaft!"),
    () => Settings.autoWarp
)

// Transfer command
registerWhen(
    register("chat", (player) => {
        console.log(player)
        ign = player.split("] ")[1]
        ChatLib.command(`p transfer ${ign}`)
    }).setCriteria("Party > ${player}: >transfer"),
    () => Settings.autoWarp || Settings.transferCommand
)