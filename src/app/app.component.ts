import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div>
        <app-nav></app-nav>
        <router-outlet></router-outlet>
        </div>
        <div class="container">
        </div>
        <app-footer></app-footer>
    `
})
export class AppComponent { }
