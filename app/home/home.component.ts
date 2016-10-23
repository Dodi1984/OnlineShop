import {Component} from 'angular2/core'
import {ProductListComponent} from '../products/product-list.component'

@Component({
    templateUrl: 'app/home/home.component.html',
    directives: [ProductListComponent]
})

export class HomeComponent {
    componentName: string = "Home Component, contains Product List Component";
}