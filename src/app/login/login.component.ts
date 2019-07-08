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
		this.passwordCtrl = fb.control('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')]);
		this.loginForm = fb.group({
			login: this.loginCtrl,
			password: this.passwordCtrl
		});
	}

	ngOnInit() {
	}

	handleClear() {
		this.router.navigate([PATH_INDEX]);
	}

	handleSubmit() {
		if(this.checkLogin(this.loginForm.value.login, this.loginForm.value.password)){
			this.createSession();
			this.router.navigate([PATH_HOME]);
		} else {

			console.log(this.loginForm.value);
		}
	}

	createSession() {
		// how do we create a session of user?
		// token JWT
	}

	//to think : switch this function to make a api call in bdd
	checkLogin(login:string,password:string){

		return true;
	}
}
