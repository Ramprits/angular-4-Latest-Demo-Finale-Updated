import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
        <app-nav></app-nav>
        <router-outlet></router-outlet>
        </div>
        <div class="container">
        <app-footer></app-footer>
        </div>
    `
})
export class AppComponent { }
