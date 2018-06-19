import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<h2>Component Style Isolation example</h2>
        
        <button class="red-button">Button</button>
        
        <app-blue-button></app-blue-button>
        
        <div class="blue-theme">
            
            <app-themeable-button></app-themeable-button>
            
        </div>
        

    `
})
export class AppComponent {

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
