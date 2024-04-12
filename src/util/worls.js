import { delay, setRegisters } from "./functions";

// Credit: volcaddons on ct for findworld and findzone
let world = undefined;
export function getWorld() { return world; };
let noFind = 0;

export function findZone() {
    let zoneLine = Scoreboard.getLines().find((line) => line.getName().includes("⏣"));
    if (zoneLine == undefined) zoneLine = Scoreboard.getLines().find((line) => line.getName().includes("ф"));
    return zoneLine == undefined ? "None" : zoneLine.getName().removeFormatting()
}
function findWorld() {
    if (noFind == 20) return;
    noFind++;
    world = TabList.getNames().find(tab => tab.includes("Area"));
    if (world == undefined)
        delay(() => {
            findWorld()
        }, 1000);
    else {
        world = world.removeFormatting();
        world = world.substring(world.indexOf(': ') + 2);

        setRegisters();
    }
}

register("worldLoad", () => {
    noFind = 0;
    world = undefined
    findWorld()
});

register("worldUnload", () => {
    world = undefined
})