import { Component } from 'angular2/core';
import {HomeComponent} from './home/home.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductDetailComponent} from './products/productDetail.component';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'app-body',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    templateUrl : '/app/app.component.html' 
})

@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/product:id', name: 'Product', component: ProductDetailComponent },
    
])
export class AppComponent {
    
}