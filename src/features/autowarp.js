import Settings from "./../../config"
import { registerWhen, delay } from "../util/functions";

const transferCmd = Settings.alternateTransferCommand || ">transfer"

registerWhen(
    register("chat", () => {
        delay(() => { ChatLib.command(`pc ${transferCmd}`) }, 500);
        delay(() => { ChatLib.command('pc [MINESHAFT] - Warping in 5 seconds!') }, 1000);
        delay(() => { ChatLib.command('p warp') }, 6500);
    }).setCriteria("${player} entered Glacite Mineshafts!").setContains(),
    () => Settings.autoWarp
)

// Transfer command
registerWhen(
    register("chat", (player) => {
        const ign = player.split("] ")[1]
        ChatLib.command(`p transfer ${ign}`)
    }).setCriteria("Party > ${player}: >transfer"),
    () => Settings.autoWarp || Settings.transferCommand
)