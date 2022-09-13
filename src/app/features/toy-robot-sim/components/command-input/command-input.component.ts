import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'command-input',
    templateUrl: './command-input.component.html',
    styleUrls: ['./command-input.component.scss']
})

export class CommandInputComponent {
    @Output() commandSend = new EventEmitter<string>();
    @Output() resetFn = new EventEmitter();

    run(command: HTMLInputElement) {
        if(command.value) {
            this.commandSend.emit(command.value);
        }
        command.value = '';
    }

    reset() {
        this.resetFn.emit();
    }
}