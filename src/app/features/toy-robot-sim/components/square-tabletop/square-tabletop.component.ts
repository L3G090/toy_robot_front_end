import { Component, OnInit } from '@angular/core';
import { MAX_LENGHT, RobotInfoInterface } from 'src/app/shared/model';
import { SquareTabletopService } from '../../provider/square-tabletop.service';

@Component({
    selector: 'square-tabletop',
    templateUrl: './square-tabletop.component.html',
    styleUrls: ['./square-tabletop.component.scss']
})
export class SquareTabletopComponent implements OnInit {
    currentX: number | null = null;
    currentY: number | null = null;
    orientation: string | null = '';
    table = new Array(MAX_LENGHT).fill(new Array(MAX_LENGHT));

    constructor(
        private squareTabletobService: SquareTabletopService
    ) {

    }

    getBackgroundColor(y: number, x: number) {
        return (y + x) % 2 === 1 ? {backgroundColor: '#8ab7f5'} : {backgroundColor: '#a3e3af'}
    }

    ngOnInit(): void {
        this.squareTabletobService.getRobotInfo()
            .subscribe({
                next: (data) => {
                    if (data) {
                        this.currentX = data.x;
                        this.currentY = data.y;
                        this.orientation = data.f;
                    } else {
                        this.currentX = null;
                        this.currentY = null;
                        this.orientation = null;
                    }
                }
            })
    }
}