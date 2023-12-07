import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';
import { ErrorService } from 'src/app/core/services/error.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ProductService } from 'src/app/core/services/product.service';
import { ICategory } from 'src/app/models/Category.model';
import { IProduct } from 'src/app/models/Product.model';
import { REGEX } from 'src/app/shared/constants/regex';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});
  id: any;

  categories: ICategory[] = [];

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private notification: NotificationService,
    private categoryService: CategoryService,
    private errorService: ErrorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.validators();
    this.id = route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.consultCategories();
    console.log(this.id);
    if (this.id) {
      this.getProductById();
    }
  }

  getProductById() {
    this.productService.getById(this.id)
      .subscribe(
        (response: IProduct) => {
          console.log(response);
          this.myForm.patchValue({...response, categoryId: response.category.id});
          //this.myForm.patchValue({categoryId: 3, title: "hola mundo"});
        }
      );
  }

  updateProduct() {
    this.productService.update(this.id, this.myForm.value)
      .subscribe(
        () => {
          this.notification.showAlert({ icon: "success", message: "Producto actualizado exitosamente" });
          this.router.navigateByUrl('/admin/products');
         },
         () => {
          this.errorService.isError(true);
         }
      );
  }

  addProduct() {
    const { title, price, description, categoryId, images } = this.myForm.value;

    const product = {
      title: title,
      price: Number(price),
      description: description,
      categoryId: Number(categoryId),
      images: [images]
    };

    this.productService.addProduct(product)
      .subscribe(
        () => {
          this.notification.showAlert({ icon: "success", message: "Producto agregado exitosamente" });
        },
        () => {
          console.log("Error al agregar el producto");
          this.errorService.isError(true);
        },
      );
  }

  consultCategories() {
    this.categoryService.getAll()
    .subscribe(
      (categories: ICategory[]) => {
        this.categories = categories
      }
    );
  }

  get input(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  validators() {
    this.myForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.pattern(REGEX.name)
      ]],
      price: ['', [
        Validators.required,
        Validators.pattern(REGEX.price)
      ]],
      description: ['', [
        Validators.required,
      ]],
      categoryId: ['', [
        Validators.required
      ]],
      images: ['', [
        Validators.required,
        //Validators.pattern(REGEX.avatar)
      ]],
    });
  }


}
