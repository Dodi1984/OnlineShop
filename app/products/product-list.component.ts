import {Component} from 'angular2/core'
import {IProduct} from './product'

@Component({
    selector: 'app-productList',
    templateUrl: '/app/products/product-list.component.html',

})

export class ProductListComponent {
    products: IProduct[] = [
        {
            "productId": 1,
            "productCode": "001",
            "productName": "MotherBoard",
            "shortDescription": "Socket 1151",
            "longDescription": "Socket 1151, release date-2016, for Intel Processors",
            "productPrice": 102,
        },
        {
            "productId": 2,
            "productCode": "002CPU",
            "productName": "CPU",
            "shortDescription": "Intel I3",
            "longDescription": "Socket 1151, release date-2016, DualCore",
            "productPrice": 144,
        },
        {
            "productId": 3,
            "productCode": "003CPU",
            "productName": "CPU",
            "shortDescription": "Intel I5",
            "longDescription": "Socket 1151, release date-2016, QuadCore",
            "productPrice": 205,
        },
        {
            "productId": 4,
            "productCode": "004CPU",
            "productName": "CPU",
            "shortDescription": "Intel I7 Skylake",
            "longDescription": "Socket 1151, release date-2016, QuadCore",
            "productPrice": 476,
        },
        {
            "productId": 5,
            "productCode": "005",
            "productName": "MotherBoard",
            "shortDescription": "Chipset H170",
            "longDescription": "Socket 1151, release date-2016, for Inter CPU`s",
            "productPrice": 89,
        },
        {
            "productId": 6,
            "productCode": "005",
            "productName": "RAM",
            "shortDescription": "DDR4",
            "longDescription": "DDR4, release date-2016, 2600MHZ",
            "productPrice": 89,
        },
    ]
}