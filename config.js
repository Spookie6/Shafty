import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SelectorProperty, @SliderProperty, Color, @CheckboxProperty } from 'Vigilance';

@Vigilant("Shafty", "§b§lShafty", {
    getCategoryComparator: () => (a, b) => {
        const categories = ['General'];

        return categories.indexOf(a.name) - categories.indexOf(b.name);
    },
})

class Settings {
    // General
    // Auto Warp
    @SwitchProperty({
        name: "Shaft Auto Warp",
        description: "Auto transfers the party and warps for mineshaft",
        category: "General",
        "subcategory": "Auto warp"
    })
    autoWarp = false;
    @SwitchProperty({
        name: "Transfer Command",
        description: "Party transfer command, enabled by default if auto warp is enabled",
        category: "General",
        "subcategory": "Auto warp"
    })
    transferCommand = false;
    @TextProperty({
        name: "Alternate Transfer Command",
        description: `Literally what the title says`,
        category: "General",
        subcategory: "Auto warp",
        placeholder: ".transfer"
    })
    alternateTransferCommand = "";

    // Alerts
    @SwitchProperty({
        name: "Mineshaft Notification",
        description: "Puts big title on screen if you get shaft",
        category: "General",
        "subcategory": "Alerts"
    })
    shaftAlert = false;
    @SwitchProperty({
        name: "Mining Ability Notification",
        description: "Puts big title on screen if you get mining ability",
        category: "General",
        "subcategory": "Alerts"
    })
    abilityAlert = false;

    // Mining abilities
    @SwitchProperty({
        name: "Mining Ability GUI",
        description: "Puts mining ability cooldown on screen",
        category: "General",
        "subcategory": "Mining Ability"
    })
    abilityCooldown = false;

    // Waypoints
    @SelectorProperty({
        name: "Shaft Entrance Waypoint",
        description: `Sends coordinates of the shaft entrance`,
        category: "General",
        subcategory: "Waypoints",
        options: ["OFF", "Party Chat", "Self"]
    })
    shaftEntranceWaypoint = 0;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("General", "General mod configs.");
    }
}

export default new Settings();