import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TOY_ROBOT_SIM_COMPONENTS } from "./components";
import { ToyRobotSimContainerComponent } from "./container/toy-robot-sim.component";
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
    providers: []
})

export class ToyRobotSimModule { };