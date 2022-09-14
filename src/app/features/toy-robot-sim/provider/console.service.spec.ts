
import { TestBed } from '@angular/core/testing';
import { ConsoleService } from './console.service';

describe('ConsoleService', () => {
    let service: ConsoleService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ConsoleService
            ]
        });
        service = TestBed.inject(ConsoleService);
    });

    it('can load instance', () => {
        expect(service).toBeTruthy();
    });

    it('should add message / should get message list', () => {
        let str: string = "REPORT";
        service.addMessage('REPORT');
        expect(service.list).toEqual(['REPORT']);
        var returnValue = service.getListMessage();
        returnValue.subscribe((data: string[]) => {
            expect(data).toBeDefined();
            expect(data).toEqual([str])
        })

    });

    it('should reset the list', () => {
        service.resetList();
        expect(service.list).toEqual([]);
    });

});

