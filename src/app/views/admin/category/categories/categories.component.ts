import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/core/services/category.service';
import { ErrorService } from 'src/app/core/services/error.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ICategory } from 'src/app/models/Category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'creationAt', 'updatedAt', 'operation'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private categoryService: CategoryService,
    private notification: NotificationService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  getCategories() {
    this.categoryService.getAll()
      .subscribe(
        (response: ICategory[]) => {
          this.dataSource.data = response;
        }
      );
  }

  deleteCategory(id: number) {
    this.categoryService.delete(id)
      .subscribe(
        () => {
          this.notification.showAlert({icon: "success", message: "La categoria se eliminó exitosamente"});

          this.getCategories();
        },
        () => {
          console.log("Error en eliminar la categoria");
          this.errorService.isError(true);
        }
      );
  }

}

