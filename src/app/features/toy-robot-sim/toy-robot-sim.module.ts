import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TOY_ROBOT_SIM_COMPONENTS } from "./components";
import { ToyRobotSimContainerComponent } from "./container/toy-robot-sim.component";
import { ConsoleService } from "./provider/console.service";
import { SquareTabletopService } from "./provider/square-tabletop.service";
import { ToyRobotSimService } from "./provider/toy-robot-sim.service";
import { ToyRobotSimRouting } from "./toy-robot-sim.routing";

@NgModule({
    imports: [
        CommonModule,
        ToyRobotSimRouting
    ],
    declarations: [
        ToyRobotSimContainerComponent,
        TOY_ROBOT_SIM_COMPONENTS
    ],
    providers: [
        ToyRobotSimService,
        SquareTabletopService,
        ConsoleService
    ]
})

export class ToyRobotSimModule { };