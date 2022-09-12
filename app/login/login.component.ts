import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../_services';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    name: string = '';
    pass: string;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }


      check() {
        this.authenticationService.login(this.name, this.pass)
            .subscribe(
                data => {
                    console.log("Going to " + this.returnUrl);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log("Error " + this.returnUrl);
                });
    }
}
