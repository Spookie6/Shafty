import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SelectorProperty, @SliderProperty, Color, @CheckboxProperty } from 'Vigilance';

@Vigilant("Shafty", "§b§lShafty", {
    getCategoryComparator: () => (a, b) => {
        const categories = ['General'];

        return categories.indexOf(a.name) - categories.indexOf(b.name);
    },
})
class Settings {
    // General
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

    @SwitchProperty({
        name: "Mineshaft Notification",
        description: "Puts big title on screen if you get shaft",
        category: "General",
        "subcategory": "Alerts"
    })
    shaftAlert = false;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("General", "General mod configs.");
    }
}

export default new Settings();