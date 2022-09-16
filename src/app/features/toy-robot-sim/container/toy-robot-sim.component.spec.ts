import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ToyRobotSimContainerComponent } from './toy-robot-sim.component';
import { ToyRobotSimService } from '../provider/toy-robot-sim.service';
import { ConsoleService } from '../provider/console.service';
import { SquareTabletopService } from '../provider/square-tabletop.service';

describe('ToyRobotSimContainerComponent', () => {
    let component: ToyRobotSimContainerComponent;
    let fixture: ComponentFixture<ToyRobotSimContainerComponent>;

    beforeEach(() => {
        const toyRobotSimServiceStub = () => ({
            validate() {}
        });
        const consoleServiceStub = () => ({
            resetList() {}
        });
        const squareTabletopServiceStub = () => ({
            reset() {}
        });
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [ToyRobotSimContainerComponent],
            providers: [
                { provide: ToyRobotSimService, useFactory: toyRobotSimServiceStub },
                { provide: ConsoleService, useFactory: consoleServiceStub },
                { provide: SquareTabletopService, useFactory: squareTabletopServiceStub }
            ]
        });
        fixture = TestBed.createComponent(ToyRobotSimContainerComponent);
        component = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });

    it('should call validate service', () => {
        const toyRobotSimServiceStub: ToyRobotSimService = fixture.debugElement.injector.get(
            ToyRobotSimService
        );
        spyOn(toyRobotSimServiceStub, 'validate').and.callThrough();
        component.validateCommand('REPORT')
        expect(toyRobotSimServiceStub.validate).toHaveBeenCalledWith('REPORT');
    });

    it('should call console service and squareTabletop service', () => {
        const consoleServiceStub: ConsoleService = fixture.debugElement.injector.get(
            ConsoleService
        );
        const squareTabletopServiceStub: SquareTabletopService = fixture.debugElement.injector.get(
            SquareTabletopService
        );
        spyOn(consoleServiceStub, 'resetList').and.callThrough();
        spyOn(squareTabletopServiceStub, 'reset').and.callThrough();
        component.reset();
        expect(consoleServiceStub.resetList).toHaveBeenCalled();
        expect(squareTabletopServiceStub.reset).toHaveBeenCalled();

    });
});
