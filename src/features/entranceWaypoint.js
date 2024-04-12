import Settings from "./../../config"
import { registerWhen, delay } from "../util/functions";
import { getWorld } from "../util/worls";
import { data } from "./../../data";

function renderWaypoint(coords) {
    const x = coords[0] + .5;
    const y = coords[1].y;
    const z = coords[2] + .5;

    RenderLib.drawEspBox(x, y, z, 1, 1, 1, 0, 0, 1, false);
    RenderLib.drawInnerEspBox(x, y, z, 1, 1, 1, 0, 0, 1, false);
    Tessellator.drawString("Entrace", x, y, z);
}

registerWhen(
    register("renderWorld", () => {
        let coords = [0, 0, 0];
        coords[0] = Math.round(Player.getX());
        coords[1] = Math.round(Player.getY());
        coords[2] = Math.round(Player.getZ());

        if (Settings.shaftEntranceWaypoint == 1) {
            renderWaypoint(coords)
        } else {
            delay(() => { ChatLib.command(`pc x: ${coords[0]}, y: ${coords[1]}, z: ${coords[2]} | Shaft Entrace`) }, 2000);
        }
    }),
    () => getWorld() == "glacite mineshaft" && Settings.shaftEntranceWaypoint
)