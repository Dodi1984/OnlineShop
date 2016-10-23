import { Component } from 'angular2/core'

@Component({
    selector: 'app-body',
    templateUrl: 'app/welcome/welcome.component.html'
})


export class WelcomeComponent {
    pageTitle: string = "Welcome to Online Shop bo$$";

    goToHome(): void {
    }
}