import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PATH_ARTIST, PATH_BOOK, PATH_CONTACT, PATH_ERROR, PATH_EVENTS, PATH_HOME, PATH_INDEX, PATH_LOGIN, PATH_SETTINGS, PATH_SIGN_IN} from '../app.constantes';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginCtrl: FormControl;
	passwordCtrl: FormControl;
	loginForm: FormGroup;

	constructor(fb: FormBuilder, private router:Router) {
		this.loginCtrl = fb.control('',[Validators.required]);
		this.passwordCtrl = fb.control('', [Validators.required, Validators.pattern('#^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)#')]);
		this.loginForm = fb.group({
			login: this.loginCtrl,
			password: this.passwordCtrl
		});
	}

	ngOnInit() {
	}


	handleSubmit() {
		// this.router.navigate([PATH_HOME]);
		console.log("here");
	}

	checkLogin(login:string,password:string){

		return true;
	}
}
