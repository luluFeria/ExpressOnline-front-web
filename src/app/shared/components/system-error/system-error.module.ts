import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemErrorComponent } from './system-error.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

@NgModule({
  declarations: [
    SystemErrorComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    SystemErrorComponent
  ],
})

export class SystemErrorModule { }
