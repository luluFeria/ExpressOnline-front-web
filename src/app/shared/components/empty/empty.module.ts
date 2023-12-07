import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';

@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [       //El exports se utiliza para compartir o exportar componentes o modulos
    EmptyComponent
  ],
})
export class EmptyModule { }
