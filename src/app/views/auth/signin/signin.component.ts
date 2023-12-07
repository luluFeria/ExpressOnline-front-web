import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { REGEX } from 'src/app/shared/constants/regex';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});
  message: string = "";
  isError: boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.validators();
  }

  ngOnInit(): void {
  }

  login() {

    this.authService.login(this.myForm.value)
      .subscribe(
        (response: any) => {
          this.message = 'Inicio de sesión exitoso';
          this.isError = false;
          localStorage.setItem("accessToken", response.access_token);
          this.router.navigate(["admin"]); //Esto se utiliza para navegar en otra ruta, esta es admin
        },
        () => {
          this.message = 'Error en el inicio de sesión';
          this.isError = true;
        }
      );
  }

  get input(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  validators() {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(REGEX.password)
      ]]
    });
  }
}
