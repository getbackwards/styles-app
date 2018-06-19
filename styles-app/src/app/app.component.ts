import {Component, HostBinding} from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})
export class AppComponent {

  @HostBinding('class.app-root') true;

    stateFlag = false;

    toggleStyles() {
        this.stateFlag = !this.stateFlag;
    }


    submit() {
        console.log('Button submitted');
    }

    calculateClasses() {
        return {
            btn: true,
            'btn-primary': true,
            'btn-extra-class': this.stateFlag
        };
    }

    calculateStyles() {
        return {
            background: 'red',
            'border-width.px': 4
        }
    }


}
