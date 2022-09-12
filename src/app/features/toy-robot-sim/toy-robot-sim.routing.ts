import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToyRobotSimContainerComponent } from './container/toy-robot-sim.component';

const routes: Routes = [{
    path: '',
    component: ToyRobotSimContainerComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ToyRobotSimRouting { }
