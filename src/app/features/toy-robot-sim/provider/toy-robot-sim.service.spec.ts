
import { TestBed } from '@angular/core/testing';
import { ConsoleService } from './console.service';
import { SquareTabletopService } from './square-tabletop.service';
import { ToyRobotSimService } from './toy-robot-sim.service';

describe('ToyRobotSimService', () => {
    let service: ToyRobotSimService;

    beforeEach(() => {
        const consoleServiceStub = () => ({
            addMessage(s: string) { }
        });
        const squareTabletopServiceStub = () => ({
            rotate(s: string) { },
            move() { },
            getReport() { },
            setRobotInfo(x:number, y:number, f:string) { }
        });
        TestBed.configureTestingModule({
            providers: [
                ToyRobotSimService,
                { provide: ConsoleService, useFactory: consoleServiceStub },
                { provide: SquareTabletopService, useFactory: squareTabletopServiceStub }
            ]
        });
        service = TestBed.inject(ToyRobotSimService);
    });

    it('can load instance', () => {
        expect(service).toBeTruthy();
    });

    describe('Validate function', () => {
        it('command not valid 1', () => {
            const consoleServiceStub: ConsoleService = TestBed.inject(ConsoleService);
            spyOn(consoleServiceStub, 'addMessage').and.callThrough();
            service.validate('ERROR');
            expect(consoleServiceStub.addMessage).toHaveBeenCalledWith('invalid command')
        });
        it('command not valid 2', () => {
            const consoleServiceStub: ConsoleService = TestBed.inject(ConsoleService);
            spyOn(consoleServiceStub, 'addMessage').and.callThrough();
            service.validate('RIGHT XXXX');
            expect(consoleServiceStub.addMessage).toHaveBeenCalledWith('invalid command')
        });
        it('LEFT command', () => {
            const consoleServiceStub: ConsoleService = TestBed.inject(ConsoleService);
            const squareTabletopServiceStub: SquareTabletopService = TestBed.inject(SquareTabletopService);
            spyOn(consoleServiceStub, 'addMessage').and.callThrough();
            spyOn(squareTabletopServiceStub, 'rotate').and.returnValue('LEFT');
            service.validate('LEFT');
            expect(consoleServiceStub.addMessage).toHaveBeenCalledWith('LEFT')
            expect(squareTabletopServiceStub.rotate).toHaveBeenCalledWith('LEFT')
        });
        it('RIGHT command', () => {
            const consoleServiceStub: ConsoleService = TestBed.inject(ConsoleService);
            const squareTabletopServiceStub: SquareTabletopService = TestBed.inject(SquareTabletopService);
            spyOn(consoleServiceStub, 'addMessage').and.callThrough();
            spyOn(squareTabletopServiceStub, 'rotate').and.returnValue('RIGHT');
            service.validate('RIGHT');
            expect(consoleServiceStub.addMessage).toHaveBeenCalledWith('RIGHT')
            expect(squareTabletopServiceStub.rotate).toHaveBeenCalledWith('RIGHT')
        });
        it('MOVE command', () => {
            const consoleServiceStub: ConsoleService = TestBed.inject(ConsoleService);
            const squareTabletopServiceStub: SquareTabletopService = TestBed.inject(SquareTabletopService);
            spyOn(consoleServiceStub, 'addMessage').and.callThrough();
            spyOn(squareTabletopServiceStub, 'move').and.returnValue('MOVE');
            service.validate('MOVE');
            expect(consoleServiceStub.addMessage).toHaveBeenCalledWith('MOVE')
            expect(squareTabletopServiceStub.move).toHaveBeenCalled();
        });
        it('REPORT command', () => {
            const consoleServiceStub: ConsoleService = TestBed.inject(ConsoleService);
            const squareTabletopServiceStub: SquareTabletopService = TestBed.inject(SquareTabletopService);
            spyOn(consoleServiceStub, 'addMessage').and.callThrough();
            spyOn(squareTabletopServiceStub, 'getReport').and.returnValue('OUPUT: 2,3,NORTH');
            service.validate('REPORT');
            expect(consoleServiceStub.addMessage).toHaveBeenCalledWith('OUPUT: 2,3,NORTH')
        });
        it('PLACE command correct', () => {
            const consoleServiceStub: ConsoleService = TestBed.inject(ConsoleService);
            const squareTabletopServiceStub: SquareTabletopService = TestBed.inject(SquareTabletopService);
            spyOn(consoleServiceStub, 'addMessage').and.callThrough();
            spyOn(squareTabletopServiceStub, 'setRobotInfo').and.callThrough();
            service.validate('PLACE 3,4,NORTH');
            expect(consoleServiceStub.addMessage).toHaveBeenCalledWith('PLACE 3,4,NORTH')
            expect(squareTabletopServiceStub.setRobotInfo).toHaveBeenCalledWith({x:3,y:0,f:'NORTH'});

        });
        it('PLACE command wrong', () => {
            const consoleServiceStub: ConsoleService = TestBed.inject(ConsoleService);
            spyOn(consoleServiceStub, 'addMessage').and.callThrough();
            service.validate('PLACE 3,4,XXXXX');
            expect(consoleServiceStub.addMessage).toHaveBeenCalledWith('invalid command')

        });
    });
});