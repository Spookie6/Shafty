import Settings from "./../../config"
import { registerWhen } from "../util/functions";

registerWhen(
    register("chat", () => {
        Client.showTitle("&bMINESHAFT", "", 1, 20, 1)
    }).setCriteria("WOW! You found a Glacite Mineshaft portal!"),
    () => Settings.shaftAlert
)