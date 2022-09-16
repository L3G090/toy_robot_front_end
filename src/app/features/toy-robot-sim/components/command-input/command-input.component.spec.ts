import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { CommandInputComponent } from './command-input.component';

describe('CommandInputComponent', () => {
  let component: CommandInputComponent;
  let fixture: ComponentFixture<CommandInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CommandInputComponent],
    });
    fixture = TestBed.createComponent(CommandInputComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('should emit commandSend', () => {
    var x = document.createElement('input')
    x.value = 'REPORT'
    spyOn(component.commandSend, 'emit').and.callThrough();
    component.run(x);
    expect(component.commandSend.emit).toHaveBeenCalledOnceWith('REPORT');
  });

  it('should not emit commandSend', () => {
    var x = document.createElement('input')
    x.value = ''
    spyOn(component.commandSend, 'emit').and.callThrough();
    component.run(x);
    expect(component.commandSend.emit).not.toHaveBeenCalled();
  });

  it('should emit resetFn', () => {
    spyOn(component.resetFn, 'emit').and.callThrough();
    component.reset();
    expect(component.resetFn.emit).toHaveBeenCalled();
  });
  
});