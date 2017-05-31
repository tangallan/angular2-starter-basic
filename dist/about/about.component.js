"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AboutComponent = (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            _this.users = data.users;
        });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about-page',
            styles: ["\n\t\t.profile-card {\n\t\t\tbackground: #f3f3f3;\n\t\t\tborder-radious : 4px;\n\t\t\tpadding: 3px;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t\t.profile-card img {\n\t\t\t\tmax-width: 50%;\n\t\t\t\tmargin: 15px auto;\n\t\t\t}\n\t"],
            template: "\n\t\t<div class=\"row\" *ngIf=\"users\">\n\t\t\t<div class=\"col-sm-4\" *ngFor=\"let user of users\">\n\t\t\t\t<div class=\"profile-card\" [routerLink]=\"['/about', user.username]\">\n\t\t\t\t\t<img [src]=\"user.avatar\" class=\"img-responsive img-circle\" />\n\n\t\t\t\t\t<h2>{{ user.name }}</h2>\n\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<a href=\"https://twitter.com/{{ user.username }}\">\n\t\t\t\t\t\t\t{{ user.username }}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map