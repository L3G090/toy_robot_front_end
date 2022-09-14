import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule, routes } from './app-routing.module';
import { ToyRobotSimModule } from './features/toy-robot-sim/toy-robot-sim.module';

describe('AppRoutingModule', () => {
    let pipe: AppRoutingModule;
    let router: any

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes)
            ],
            providers: [AppRoutingModule]
        });
        pipe = TestBed.inject(AppRoutingModule);
        router = TestBed.inject(Router);
    });

    it('can load instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should load specific module', async () => {
        const route = router.config.find((rc: any) => rc.path === 'toy-robot');
        if (typeof route.loadChildren === 'function') {
            expect(await route.loadChildren()).toEqual(ToyRobotSimModule)
        }

    });
});
