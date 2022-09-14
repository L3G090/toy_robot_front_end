import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'robot',
  template: `<img [src]="url" width="80" [ngClass]="facing+'-direction'"/>`,
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent{
  url = './assets/images/space-suit-robot-top-down.png'
  @Input() facing: string | null = "NORTH";
}
