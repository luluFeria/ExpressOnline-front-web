import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './user/users/users.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './product/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './product/add-product/add-product.component';
import { CategoriesComponent } from './category/categories/categories.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { DetailCategoryComponent } from './category/detail-category/detail-category.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { EmptyModule } from 'src/app/shared/components/empty/empty.module';
import { SystemErrorModule } from 'src/app/shared/components/system-error/system-error.module';
import { FilterCategoryPipe } from 'src/app/shared/pipes/filter-category.pipe';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    AddUserComponent,
    CategoriesComponent,
    ProductsComponent,
    AddCategoryComponent,
    AddProductComponent,
    DetailCategoryComponent,
    DetailUserComponent,
    DetailProductComponent,
    FilterCategoryPipe
  ],
  imports: [
    AdminRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    CommonModule,
    EmptyModule,
    SystemErrorModule
  ]
})
export class AdminModule { }
