import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorService } from 'src/app/core/services/error.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/models/User.model';
import { REGEX } from 'src/app/shared/constants/regex';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});
  id: any;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private notification: NotificationService,
    private errorService: ErrorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.validators();
    this.id = route.snapshot.params["id"];
  }

  ngOnInit(): void {
    console.log(this.id);
    if (this.id) {
      this.getUserById();
    }
  }

  getUserById() {
    this.userService.getById(this.id)
      .subscribe(
        (response: IUser) => {
          this.myForm.patchValue(response);
        }
      );
  }

  updateUser() {
    this.userService.update(this.id, this.myForm.value)
      .subscribe(
        () => {
          this.notification.showAlert({ icon: "success", message: "Usuario actualizado exitosamente" });
          this.router.navigateByUrl('/admin/users');
         },
         () => {
          this.errorService.isError(true);
         }
      );
  }

  addUser() {
    this.userService.addUser(this.myForm.value)
      .subscribe(
        () => {
          this.notification.showAlert({ icon: "success", message: "Usuario agregado exitosamente" });
        },
        () => {
          console.log("Error al agregar el usuario");
          this.errorService.isError(true);
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
        Validators.pattern(REGEX.email)
      ]],
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(REGEX.name)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(REGEX.password)
      ]],
      role: ['', [
        Validators.required
      ]],
      avatar: ['', [
        Validators.required,
        //Validators.pattern(REGEX.avatar)
      ]],
    });
  }

}
