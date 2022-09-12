import { Component } from '@angular/core';

export const MAX_LENGHT = 5;

@Component({
    selector: 'square-tabletop',
    templateUrl: './square-tabletop.component.html',
    styleUrls: ['./square-tabletop.component.scss']
})
export class SquareTabletopComponent {
    currentX: number = 0;
    currentY: number = MAX_LENGHT-1;
    table = new Array(MAX_LENGHT).fill(new Array(MAX_LENGHT));
}
