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
var user_service_1 = require('../../shared/services/user.service');
var DashboardUsersDetailsComponent = (function () {
    function DashboardUsersDetailsComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    DashboardUsersDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //what does this do?
        //each time the component gets updated the angular router will 
        //loop and find the updated params (username) and updates the component
        //if we use this.route.snapshot.params the object never updates so 
        //this is why we need this to keep the page up to date when the user clicks on a user
        //this is what we call an observable
        this.route.params.forEach(function (params) {
            var username = params['username'];
            _this.service.getUser(username).then(function (user) {
                _this.user = user;
                _this.editName = user.name;
            });
        });
    };
    //save user name and navigate back
    DashboardUsersDetailsComponent.prototype.save = function () {
        this.user.name = this.editName;
        this.router.navigate(['/dashboard/users']);
    };
    //dont save and navigiate back to dashboard users
    DashboardUsersDetailsComponent.prototype.cancel = function () {
        this.router.navigate(['/dashboard/users']);
    };
    DashboardUsersDetailsComponent.prototype.canDeactivate = function () {
        console.log('i am navigating away');
        if (this.editName !== this.user.name) {
            return window.confirm('Discard changes?');
        }
        return true;
    };
    DashboardUsersDetailsComponent = __decorate([
        core_1.Component({
            template: "\n\t\t<div class=\"jumbotron\">\n\t\t\t<div *ngIf=\"user\">\n\t\t\t\t<h2>{{user.name}}</h2>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"editName\" class=\"form-control\" />\n\t\t\t\t</div>\t\t\t\t\n\n\t\t\t\t<div class=\"form-group text-center\">\n\t\t\t\t\t<button (click)=\"cancel()\" class=\"btn btn-danger\">\n\t\t\t\t\t\tCancel\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<button (click)=\"save()\" class=\"btn btn-success\">\n\t\t\t\t\t\tSave\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
    ], DashboardUsersDetailsComponent);
    return DashboardUsersDetailsComponent;
}());
exports.DashboardUsersDetailsComponent = DashboardUsersDetailsComponent;
//# sourceMappingURL=dashboard-user-details.component.js.map