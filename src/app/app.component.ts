import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
        <app-nav></app-nav>
        <router-outlet></router-outlet>
        <app-footer></app-footer>
        </div>
        
    `
})
export class AppComponent { }
