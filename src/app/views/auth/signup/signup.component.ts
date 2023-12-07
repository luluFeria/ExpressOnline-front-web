import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { REGEX } from 'src/app/shared/constants/regex';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});
  message: string = "";
  isError: boolean = false;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
  ) {
    this.validators();
  }

  ngOnInit(): void {
  }

  save() {

    this.userService.save(this.myForm.value)
      .subscribe(
        () => {
          this.message = 'Registro exitoso';
          this.isError = false;
        },
        () => {
          this.message = 'Error en el registro. Inténtalo de nuevo';
          this.isError = true;
        }
      );

    setTimeout(() => {
      this.message = "";
      this.isError = false;
    }, 3000);
  }

  get input(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  validators() {
    this.myForm = this.fb.group({
      email: ['msantiago@linko.mx', [
        Validators.required,
        Validators.email
      ]],
      name: ['Antonio', [
        Validators.required,
        Validators.pattern(REGEX.name)
      ]],
      password: ['santiago10', [
        Validators.required,
        Validators.pattern(REGEX.password)
      ]],
      role: ['asdasds', [
        Validators.required
      ]],
      avatar: ['https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisaje.jpg', [
        Validators.required,
        Validators.pattern(REGEX.avatar)
      ]],
    });
  }

}


