import { Component, OnInit } from "@angular/core";
import { ConsoleService } from "../../provider/console.service";

@Component({
    selector: 'console',
    templateUrl: './console.component.html',
    styleUrls: ['./console.component.scss']
})

export class ConsoleComponent implements OnInit {
    list: string[] = []
    constructor(
        private consoleService: ConsoleService
    ) { }

    ngOnInit() {
        this.consoleService.getListMessage()
            .subscribe({
                next: (data: string[]) => {
                    if(data){this.list = data;}
                }
            })
    }
}