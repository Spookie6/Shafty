import RenderLib from "RenderLib";
export const stripFormatting = (string) => {
    /**
     * Removes colors codes from a string
     * @param {String}: String to remove color codes from.
     */
    if (!string) { return null; }
    ret = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "&" && string.length - i > 0) {
            i++;
        } else {
            ret += string[i];
        }
    }
    return ret;
};

export const timer = (duration, display, msg) => {
    /**
    * Returns a timer that updates a display every second.
    * @param {Number}: Timer duration in seconds.
    * @param {Object}: Chattriggers display class.
    * @param {String}: Message to put the timer in, use add "{time}" to be replaced by the seconds left.
    */
    const goalDate = Date.now() + (duration * 1000);
    const Timer = register("step", () => {
        const currentDate = Date.now();
        const timeLeft = goalDate - currentDate;
        const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const displayMessage = msg.replace(`{time}`, secondsLeft);
        display.setLine(1, displayMessage);

        if (secondsLeft < 0) {
            display.hide();
            Timer.unregister();
        }
    }).setDelay(1);
};

// Credit: volcaddons
const Threading = Java.type("gg.essential.api.utils.Multithreading");
export function delay(func, time) {
    /**
     * Add a delay between functions
     * @param {Object}: Function to be ran.
     * @param {Number}: Delay in ms.
     */
    if (time) {
        Threading.schedule(() => { func() }, time, java.util.concurrent.TimeUnit.MILLISECONDS);
    } else {
        Threading.runAsync(() => { func() });
    }
};

let registers = [];
export function registerWhen(trigger, dependency) {
    registers.push([trigger.unregister(), dependency, false]);
}

export function setRegisters() {
    registers.forEach(trigger => {
        if (trigger[1]() && !trigger[2]) {
            trigger[0].register();
            trigger[2] = true;
        } else if (!trigger[1]() && trigger[2]) {
            trigger[0].unregister();
            trigger[2] = false;
        }
    });
}
delay(() => {
    setRegisters()
}, 1000);