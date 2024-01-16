import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErrorService } from 'src/app/core/services/error.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ProductService } from 'src/app/core/services/product.service';
import { IProduct } from 'src/app/models/Product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'price', 'category', 'creationAt', 'updatedAt', 'operation'];
  dataSource = new MatTableDataSource();
  search: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private productService: ProductService,
    private notification: NotificationService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  getProducts() {
    this.productService.getAll()
      .subscribe(
        (response: IProduct[]) => {
          this.dataSource.data = response;
        }
      );
  }

  deleteProduct(id: number) {
    this.productService.delete(id)
      .subscribe(
        () => {
          this.notification.showAlert({icon: "success", message: "El producto se eliminó exitosamente"});

          this.getProducts();
        },
        () => {
          console.log("Error al eliminar el producto");
          this.errorService.isError(true);
        }
      );
  }

}
