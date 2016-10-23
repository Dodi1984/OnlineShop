System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent() {
                    this.products = [
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
                    ];
                }
                ProductListComponent = __decorate([
                    core_1.Component({
                        selector: 'app-productList',
                        templateUrl: '/app/products/product-list.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map