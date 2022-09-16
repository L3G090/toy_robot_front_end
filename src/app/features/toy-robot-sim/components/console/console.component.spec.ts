import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ConsoleComponent } from './console.component';
import { ConsoleService } from '../../provider/console.service';
import { of } from 'rxjs';

describe('ConsoleComponent', () => {
    let component: ConsoleComponent;
    let fixture: ComponentFixture<ConsoleComponent>;

    beforeEach(() => {
        const consoleServiceStub = () => ({
            getListMessage() {
                return of([
                    'MOVE',
                    'RIGHT',
                    'LEFT',
                    'PLACE 0,1,NORTH'
                ])
            }
        });
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [ConsoleComponent],
            providers: [{ provide: ConsoleService, useFactory: consoleServiceStub }]
        });
        fixture = TestBed.createComponent(ConsoleComponent);
        component = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });

    it('should getListMessage', () => {
        var expectedArray = ['MOVE','RIGHT','LEFT','PLACE 0,1,NORTH']
        const consoleServiceStub: ConsoleService = fixture.debugElement.injector.get(
            ConsoleService
        );
        spyOn(consoleServiceStub, 'getListMessage').and.callThrough();
        component.ngOnInit();
        expect(consoleServiceStub.getListMessage).toHaveBeenCalled();
        expect(component.list).toEqual(expectedArray)
    });

});