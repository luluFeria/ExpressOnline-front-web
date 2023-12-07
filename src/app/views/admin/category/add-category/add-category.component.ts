import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';
import { ErrorService } from 'src/app/core/services/error.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ICategory } from 'src/app/models/Category.model';
import { REGEX } from 'src/app/shared/constants/regex';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.sass']
})
export class AddCategoryComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});
  id: any;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private notification: NotificationService,
    private errorService: ErrorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.validators();
    this.id = route.snapshot.params["id"];  //Esto es para obtener el parametro id de la url
  }

  ngOnInit(): void {
    console.log(this.id);
    if (this.id) {
      this.getCategoryById();
    }
  }

  getCategoryById() {
    this.categoryService.getById(this.id)
      .subscribe(
        (response: ICategory) => {
          console.log(response);
          this.myForm.patchValue(response); //Del detalle de la categoria, los añado a cada campo del formulario
        }
      );
  }

  updateCategory() {
    this.categoryService.update(this.id, this.myForm.value)
      .subscribe(
        () => {
          this.notification.showAlert({ icon: "success", message: "Categoria actualizada exitosamente" });
          this.router.navigateByUrl('/admin/categories');
         },
         () => {
          this.errorService.isError(true);
         }
      );
  }

  addCategory() {
    this.categoryService.add(this.myForm.value)
      .subscribe(
        () => {
          this.notification.showAlert({ icon: "success", message: "Categoria agregada exitosamente" });
          this.router.navigateByUrl('/admin/categories');
        },
        () => {
          console.log("Error al agregar la categoria");
          this.errorService.isError(true);
        }
      );
  }

  get input(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  validators() {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(REGEX.name)
      ]],
      image: ['', [
        Validators.required,
        //Validators.pattern(REGEX.avatar)
      ]]
    });
  }

}
