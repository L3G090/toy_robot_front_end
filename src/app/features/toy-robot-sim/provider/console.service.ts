import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class ConsoleService {

    private list$ = new BehaviorSubject<string[]>([]);
    list: string[] = [];


    addMessage(value: string) {
        this.list.push(value);
        this.list$.next(this.list);
    }

    resetList() {
        this.list = [];
        this.list$.next([])
    }

    getListMessage() {
        return this.list$.asObservable();
    }

}