import { Injectable } from "@angular/core";
import { COMMAND, MAX_LENGHT } from "src/app/shared/model";
import { ConsoleService } from "./console.service";
import { SquareTabletopService } from "./square-tabletop.service";

@Injectable({
    providedIn: 'root'
})

export class ToyRobotSimService {
    placeRegExp = new RegExp(/^PLACE\s+([0-4]),([0-4]),(NORTH|SOUTH|EAST|WEST)$/i);

    constructor(
        private squareTabletopService: SquareTabletopService,
        private consoleService: ConsoleService
    ) { }

    validate(command: string) {
        var str = command.split(' ')[0];
        switch (str) {
            case COMMAND.LEFT:
                this.consoleService.addMessage(this.squareTabletopService.rotate(COMMAND.LEFT));
                break;
            case COMMAND.RIGHT:
                this.consoleService.addMessage(this.squareTabletopService.rotate(COMMAND.RIGHT));
                break;
            case COMMAND.MOVE:
                this.consoleService.addMessage(this.squareTabletopService.move());
                break;
            case COMMAND.PLACE:
                if (this.placeRegExp.test(command)) {
                    var param = this.placeRegExp.exec(command)
                    if (param) {
                        this.squareTabletopService.setRobotInfo(parseInt(param[1]), MAX_LENGHT - 1 - parseInt(param[2]), param[3])
                        this.consoleService.addMessage(param[0]);
                    }
                } else {
                    this.consoleService.addMessage('invalid command');
                }
                break;
            case COMMAND.REPORT:
                this.consoleService.addMessage(this.squareTabletopService.getReport());
                break
            default:
                this.consoleService.addMessage('invalid command');
        }
    }
}