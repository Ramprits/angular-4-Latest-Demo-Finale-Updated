import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
        <app-nav></app-nav>
        <router-outlet></router-outlet>
        </div>
        <app-footer></app-footer>
    `
})
export class AppComponent { }
