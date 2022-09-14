
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';
import { RobotInfoInterface } from 'src/app/shared/model';
import { SquareTabletopService } from './square-tabletop.service';

describe('SquareTabletopService', () => {
    let service: SquareTabletopService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SquareTabletopService
            ]
        });
        service = TestBed.inject(SquareTabletopService);
    });

    it('can load instance', () => {
        expect(service).toBeTruthy();
    });

    it('should add robot info / should get robot info', () => {
        let expectObj: RobotInfoInterface = { x: 3, y: 4, f: 'NORTH' };
        service.setRobotInfo(3, 4, 'NORTH');
        expect(service.robotInfo).toEqual(expectObj);
        var returnValue = service.getRobotInfo();
        returnValue.subscribe((data: RobotInfoInterface | null) => {
            expect(data).toBeDefined();
            expect(data).toEqual(expectObj)
        })

    });

    it('should reset robot info', () => {
        service.reset();
        expect(service.robotInfo).toEqual(null);
    });

    it('should get report', () => {
        service.setRobotInfo(3, 4, 'NORTH');
        var resultValue = service.getReport();
        expect(resultValue).toBe('OUTPUT: 3,0,NORTH')
        service.reset();
        resultValue = service.getReport();
        expect(resultValue).toBe('invalid command');
    });

    describe('Move function', () => {
        it('robot not placed', () => {
            var resultValue = service.move();
            expect(resultValue).toBe('invalid command')            
        });
        it('robot faced to nord not at the edge', () => {
            service.setRobotInfo(3, 4, 'NORTH');
            var resultValue = service.move();
            expect(service.robotInfo?.y).toBe(3)
            expect(resultValue).toBe('MOVE')            
        });
        it('robot faced to nord at the edge', () => {
            service.setRobotInfo(3, 0, 'NORTH');
            var resultValue = service.move();
            expect(resultValue).toBe('invalid command')            
        });
        it('robot faced to south not at the edge', () => {
            service.setRobotInfo(1, 1, 'SOUTH');
            var resultValue = service.move();
            expect(service.robotInfo?.y).toBe(2)
            expect(resultValue).toBe('MOVE')            
        });
        it('robot faced to south at the edge', () => {
            service.setRobotInfo(3, 4, 'SOUTH');
            var resultValue = service.move();
            expect(resultValue).toBe('invalid command')            
        });
        it('robot faced to west not at the edge', () => {
            service.setRobotInfo(3, 4, 'WEST');
            var resultValue = service.move();
            expect(service.robotInfo?.x).toBe(2)
            expect(resultValue).toBe('MOVE')            
        });
        it('robot faced to west at the edge', () => {
            service.setRobotInfo(0, 4, 'WEST');
            var resultValue = service.move();
            expect(resultValue).toBe('invalid command')            
        });
        it('robot faced to east not at the edge', () => {
            service.setRobotInfo(3, 4, 'EAST');
            var resultValue = service.move();
            expect(service.robotInfo?.x).toBe(4)
            expect(resultValue).toBe('MOVE')            
        });
        it('robot faced to east at the edge', () => {
            service.setRobotInfo(4, 4, 'EAST');
            var resultValue = service.move();
            expect(resultValue).toBe('invalid command')            
        });
    });

    describe('Rotate function', () => {
        it('robot not placed', () => {
            var resultValue = service.rotate('RIGHT');
            expect(resultValue).toBe('invalid command')            
        });
        it('right rotation - robot faced to north', () => {
            service.setRobotInfo(3, 4, 'NORTH');
            var resultValue = service.rotate('RIGHT');
            expect(service.robotInfo?.f).toBe('EAST')
            expect(resultValue).toBe('RIGHT')            
        });
        it('right rotation - robot faced to south', () => {
            service.setRobotInfo(3, 4, 'SOUTH');
            var resultValue = service.rotate('RIGHT');
            expect(service.robotInfo?.f).toBe('WEST')
            expect(resultValue).toBe('RIGHT')            
        });
        it('right rotation - robot faced to west', () => {
            service.setRobotInfo(3, 4, 'WEST');
            var resultValue = service.rotate('RIGHT');
            expect(service.robotInfo?.f).toBe('NORTH')
            expect(resultValue).toBe('RIGHT')            
        });
        it('right rotation - robot faced to east', () => {
            service.setRobotInfo(3, 4, 'EAST');
            var resultValue = service.rotate('RIGHT');
            expect(service.robotInfo?.f).toBe('SOUTH')
            expect(resultValue).toBe('RIGHT')            
        });
        it('left rotation - robot faced to north', () => {
            service.setRobotInfo(3, 4, 'NORTH');
            var resultValue = service.rotate('LEFT');
            expect(service.robotInfo?.f).toBe('WEST')
            expect(resultValue).toBe('LEFT')            
        });
        it('left rotation - robot faced to south', () => {
            service.setRobotInfo(3, 4, 'SOUTH');
            var resultValue = service.rotate('LEFT');
            expect(service.robotInfo?.f).toBe('EAST')
            expect(resultValue).toBe('LEFT')            
        });
        it('left rotation - robot faced to west', () => {
            service.setRobotInfo(3, 4, 'WEST');
            var resultValue = service.rotate('LEFT');
            expect(service.robotInfo?.f).toBe('SOUTH')
            expect(resultValue).toBe('LEFT')            
        });
        it('left rotation - robot faced to east', () => {
            service.setRobotInfo(3, 4, 'EAST');
            var resultValue = service.rotate('LEFT');
            expect(service.robotInfo?.f).toBe('NORTH')
            expect(resultValue).toBe('LEFT')            
        });
    });
});

