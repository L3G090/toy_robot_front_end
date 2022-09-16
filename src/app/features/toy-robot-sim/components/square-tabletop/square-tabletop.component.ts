import { Component, OnInit } from '@angular/core';
import { MAX_LENGHT, RobotInfoInterface } from 'src/app/shared/model';
import { SquareTabletopService } from '../../provider/square-tabletop.service';

@Component({
    selector: 'square-tabletop',
    templateUrl: './square-tabletop.component.html',
    styleUrls: ['./square-tabletop.component.scss']
})
export class SquareTabletopComponent implements OnInit {
    robotInfo: RobotInfoInterface | null = null;
    table = new Array(MAX_LENGHT).fill(new Array(MAX_LENGHT));

    constructor(
        private squareTabletobService: SquareTabletopService
    ) { }

    getBackgroundColor(y: number, x: number) {
        return (y + x) % 2 === 1 ? { backgroundColor: '#bbb6ad' } : { backgroundColor: '#dbcdb7' }
    }

    ngOnInit(): void {
        this.squareTabletobService.getRobotInfo()
            .subscribe((data) => {
                this.robotInfo = data;
            })
    }
}