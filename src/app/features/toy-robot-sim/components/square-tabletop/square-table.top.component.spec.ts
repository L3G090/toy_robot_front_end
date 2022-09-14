import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { SquareTabletopComponent } from './square-tabletop.component';
import { SquareTabletopService } from '../../provider/square-tabletop.service';
import { of } from 'rxjs';

describe('SquareTabletopComponent', () => {
    let component: SquareTabletopComponent;
    let fixture: ComponentFixture<SquareTabletopComponent>;

    beforeEach(() => {
        const squareTabletopServiceStub = () => ({
            getRobotInfo() {
                return of({
                    x: 3,
                    y: 4,
                    f: 'NORTH'
                })
            },
            getRobotInfo2() {
                return of(null)
            }
        });
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [SquareTabletopComponent],
            providers: [{ provide: SquareTabletopService, useFactory: squareTabletopServiceStub }]
        });
        fixture = TestBed.createComponent(SquareTabletopComponent);
        component = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });

    it('should return green backgroundColor', () => {
        var expectedREsult = { backgroundColor: '#a3e3af' }
        var result = component.getBackgroundColor(1, 3);
        expect(result).toEqual(expectedREsult)
    });

    it('should return blue backgroundColor', () => {
        var expectedREsult = { backgroundColor: '#8ab7f5' }
        var result = component.getBackgroundColor(1, 2);
        expect(result).toEqual(expectedREsult)
    });

    it('should get robot info', () => {
        var expectedObj = {
            x: 3,
            y: 4,
            f: 'NORTH'
        };
        const squareTabletopServiceStub: SquareTabletopService = fixture.debugElement.injector.get(
            SquareTabletopService
        );
        spyOn(squareTabletopServiceStub, 'getRobotInfo').and.callThrough();
        component.ngOnInit();
        expect(squareTabletopServiceStub.getRobotInfo).toHaveBeenCalled();
        expect(component.currentX).toEqual(expectedObj.x)
        expect(component.currentY).toEqual(expectedObj.y)
        expect(component.orientation).toEqual(expectedObj.f)
    });

    it('should not get robot info', () => {
        const squareTabletopServiceStub: SquareTabletopService = fixture.debugElement.injector.get(
            SquareTabletopService
        );
        spyOn(squareTabletopServiceStub, 'getRobotInfo').and.returnValue(of(null));
        component.ngOnInit();
        expect(squareTabletopServiceStub.getRobotInfo).toHaveBeenCalled();
        expect(component.currentX).toEqual(null)
        expect(component.currentY).toEqual(null)
        expect(component.orientation).toEqual(null)
    });
});
