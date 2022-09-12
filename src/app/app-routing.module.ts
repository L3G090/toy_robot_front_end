import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'toy-robot', loadChildren: () => import('./features/toy-robot-sim/toy-robot-sim.module').then(x => x.ToyRobotSimModule)},
  { path: '', redirectTo: '/toy-robot', pathMatch: 'full' },
  { path: '**', redirectTo: '/toy-robot', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
