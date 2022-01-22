const GoToLocationCapability = require("../../../core/capabilities/GoToLocationCapability");
const RoborockMapParser = require("../RoborockMapParser");

/**
 * @extends GoToLocationCapability<import("../RoborockValetudoRobot")>
 */
class RoborockGoToLocationCapability extends GoToLocationCapability {
    /**
     * @param {import("../../../entities/core/ValetudoGoToLocation")} valetudoGoToLocation
     * @returns {Promise<void>}
     */
    async goTo(valetudoGoToLocation) {
        await this.robot.sendCommand(
            "app_goto_target",
            [
                Math.floor(valetudoGoToLocation.coordinates.x * 10),
                Math.floor(RoborockMapParser.DIMENSION_MM - valetudoGoToLocation.coordinates.y * 10)
            ],
            {}
        );
    }
}

module.exports = RoborockGoToLocationCapability;
