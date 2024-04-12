import PogObject from "PogData"

export let data = new PogObject("shafty", {
    "first_time": true,
    "name": undefined,
    "power": undefined,
    "tuning": undefined,
    "enrich": undefined,
    "mp": undefined,
    "pet": undefined,
    "hotbar": {},
}, "data.json");

register("gameUnload", () => {
    data.save();
});
