import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'todolist';
    name: string = 'castiyeaux';

    constructor() {
        console.log(123);
    }
}
