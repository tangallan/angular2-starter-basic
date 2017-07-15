import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
	template: `
		<h2>User Sections</h2>
		<p class="">
			Manage your users. 
		</p>
		<div class="row">
			<div class="col-md-4">
				<div class="list-group" *ngIf="users">
					<a  class="list-group-item" 
						*ngFor="let user of users" 
						routerLinkActive="active"
						[routerLink]="['/dashboard/users/', user.username]">
						{{user.name}}
					</a>
				</div>
			</div>

			<div class="col-md-8">
				<router-outlet></router-outlet>
			</div>
		</div>
	`
})
export class DashboardUsersComponent implements OnInit {
	users: User[] = [];

	constructor(private userService: UserService) {}

	ngOnInit() {
		//console.log(this.userService);
		this.userService.getUsers().then(users => {
			console.log('getting useres for dashboard users component');
			
			this.users = users;
		});
	}
}