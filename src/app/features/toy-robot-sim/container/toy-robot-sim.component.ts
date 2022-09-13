import { Component } from '@angular/core';
import { ConsoleService } from '../provider/console.service';
import { SquareTabletopService } from '../provider/square-tabletop.service';
import { ToyRobotSimService } from '../provider/toy-robot-sim.service';

export const MAX_LENGHT = 5;

@Component({
    selector: 'toy-robot-sim',
    templateUrl: './toy-robot-sim.component.html',
    styleUrls: ['./toy-robot-sim.component.scss']
})
export class ToyRobotSimContainerComponent {

    constructor(
        private toyRobotSimService: ToyRobotSimService,
        private consoleService: ConsoleService,
        private squareTabletopService: SquareTabletopService
    ) {}
    
    validateCommand(command: string) {
        this.toyRobotSimService.validate(command);
    }

    reset() {
        this.consoleService.resetList();
        this.squareTabletopService.reset();
    }
}
