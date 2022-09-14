import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent{
  url = './assets/images/space-suit-robot-top-down.png'
  @Input() facing: string | null = "NORTH";
}
