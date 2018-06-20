import {Component, HostBinding} from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})
export class AppComponent {

  @HostBinding('class.app-root') true;

    submit() {
        console.log('Button submitted');
    }
}
