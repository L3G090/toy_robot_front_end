import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RobotComponent } from './robot.component';

describe('RobotComponent', () => {
    let component: RobotComponent;
    let fixture: ComponentFixture<RobotComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [RobotComponent]
        });
        fixture = TestBed.createComponent(RobotComponent);
        component = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });
});
