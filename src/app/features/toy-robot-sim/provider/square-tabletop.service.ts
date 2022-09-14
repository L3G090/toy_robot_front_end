import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { COMMAND, DIRECTION, RobotInfoInterface } from "src/app/shared/model";
import { MAX_LENGHT } from "../container/toy-robot-sim.component";


@Injectable({
    providedIn: 'root'
})

export class SquareTabletopService {

    private robotInfo$ = new BehaviorSubject<RobotInfoInterface | null>(null)
    robotInfo: RobotInfoInterface | null = null;

    setRobotInfo(xCoord: number, yCoord: number, facing: string) {
        this.robotInfo = { x: xCoord, y: yCoord, f: facing };
        this.robotInfo$.next({ x: xCoord, y: yCoord, f: facing })
    }

    reset() {
        this.robotInfo = null;
        this.robotInfo$.next(null);
    }

    getRobotInfo() {
        return this.robotInfo$.asObservable();
    }

    getReport(): string {
        if (!this.robotInfo) return 'invalid command';
        else return 'OUTPUT: ' + this.robotInfo.x + ',' + (MAX_LENGHT - 1 - this.robotInfo.y) + ',' + this.robotInfo?.f;
    }

    move() {
        if (!this.robotInfo) return 'invalid command';
        switch (this.robotInfo.f) {
            case DIRECTION.NORTH:
                if (this.robotInfo.y - 1 >= 0) {
                    this.robotInfo.y -= 1;
                } else {
                    return 'invalid command';
                }
                break;
            case DIRECTION.WEST:
                if (this.robotInfo.x - 1 >= 0) {
                    this.robotInfo.x -= 1;
                } else {
                    return 'invalid command';
                }
                break;
            case DIRECTION.SOUTH:
                if (this.robotInfo.y + 1 < MAX_LENGHT) {
                    this.robotInfo.y += 1;
                } else {
                    return 'invalid command';
                }
                break;
            case DIRECTION.EAST:
                if (this.robotInfo.x + 1 < MAX_LENGHT) {
                    this.robotInfo.x += 1;
                } else {
                    return 'invalid command';
                }
                break;
        }
        this.setRobotInfo(this.robotInfo.x, this.robotInfo.y, this.robotInfo.f);
        return COMMAND.MOVE;
    }

    rotate(rotation: string): string {
        if (!this.robotInfo) return 'invalid command';
        if (rotation === COMMAND.LEFT) {
            switch (this.robotInfo.f) {
                case DIRECTION.NORTH:
                    this.robotInfo.f = DIRECTION.WEST;
                    break;
                case DIRECTION.WEST:
                    this.robotInfo.f = DIRECTION.SOUTH;
                    break;
                case DIRECTION.SOUTH:
                    this.robotInfo.f = DIRECTION.EAST;
                    break;
                case DIRECTION.EAST:
                    this.robotInfo.f = DIRECTION.NORTH;
                    break;
            }
        } else if (rotation === COMMAND.RIGHT) {
            switch (this.robotInfo.f) {
                case DIRECTION.NORTH:
                    this.robotInfo.f = DIRECTION.EAST;
                    break;
                case DIRECTION.EAST:
                    this.robotInfo.f = DIRECTION.SOUTH;
                    break;
                case DIRECTION.SOUTH:
                    this.robotInfo.f = DIRECTION.WEST;
                    break;
                case DIRECTION.WEST:
                    this.robotInfo.f = DIRECTION.NORTH;
                    break;
            }
        }
        this.setRobotInfo(this.robotInfo.x, this.robotInfo.y, this.robotInfo.f);
        return rotation;
    }


}