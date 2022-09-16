import { Injectable } from "@angular/core";
import { COMMAND, MAX_LENGHT } from "src/app/shared/model";
import { ConsoleService } from "./console.service";
import { SquareTabletopService } from "./square-tabletop.service";

@Injectable({
    providedIn: 'root'
})

export class ToyRobotSimService {
    placeRegExp = new RegExp(/^PLACE\s+([0-4])(,|\s)+([0-4])(,|\s)+(NORTH|SOUTH|EAST|WEST)$/i);

    constructor(
        private squareTabletopService: SquareTabletopService,
        private consoleService: ConsoleService
    ) { }

    validate(command: string) {
        var str = command.split(' ');
        if (str.length > 1 && str[0] != COMMAND.PLACE) {
            this.consoleService.addMessage('invalid command');
            return;
        }
        switch (str[0]) {
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
                        this.squareTabletopService.setRobotInfo({ x: parseInt(param[1]), y: MAX_LENGHT - 1 - parseInt(param[3]), f: param[5] })
                        this.consoleService.addMessage(COMMAND.PLACE + ' ' + param[1] + ',' + param[3] + ',' + param[5]);
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