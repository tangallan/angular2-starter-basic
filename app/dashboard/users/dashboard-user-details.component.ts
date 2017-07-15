import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
	template: `
		<div class="jumbotron">
			<div *ngIf="user">
				<h2>{{user.name}}</h2>

				<div class="form-group">
					<input type="text" [(ngModel)]="editName" class="form-control" />
				</div>				

				<div class="form-group text-center">
					<button (click)="cancel()" class="btn btn-danger">
						Cancel
					</button>

					<button (click)="save()" class="btn btn-success">
						Save
					</button>
				</div>
			</div>
		</div>
	`
})

export class DashboardUsersDetailsComponent implements OnInit {
	user: User;
	editName: string;

	constructor(private service: UserService, private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		//what does this do?
		//each time the component gets updated the angular router will 
		//loop and find the updated params (username) and updates the component
		//if we use this.route.snapshot.params the object never updates so 
		//this is why we need this to keep the page up to date when the user clicks on a user
		//this is what we call an observable
		this.route.params.forEach(params => {
			let username = params['username'];

			this.service.getUser(username).then(user => {
				this.user = user;
				this.editName = user.name;
			});
		});
	}

	//save user name and navigate back
	save() {
		this.user.name = this.editName;
		this.router.navigate(['/dashboard/users']);
	}

	//dont save and navigiate back to dashboard users
	cancel() {
		this.router.navigate(['/dashboard/users']);
	}

	canDeactivate() {
		console.log('i am navigating away');

		if(this.editName !== this.user.name) {
			return window.confirm('Discard changes?');
		}

		return true;
	}
}