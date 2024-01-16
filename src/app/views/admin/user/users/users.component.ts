import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErrorService } from 'src/app/core/services/error.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/models/User.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'operation'];
  dataSource = new MatTableDataSource();
  search: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private userService: UserService,
    private notification: NotificationService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.dataSource.data = [];
    this.getUsers();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  getUsers() {
    this.userService.getAll()
      .subscribe(
        (response: IUser[]) => {
          this.dataSource.data = response;
        },
        () => {
          console.log("Error al consultar los usuarios");
        }
      );
  }

  deleteUser(id: number) {
    this.userService.delete(id)
      .subscribe(
        () => {
          this.notification.showAlert({icon: "success", message: "El usuario se eliminó exitosamente"});

          this.getUsers();
        },
        () => {
          console.log("Error al eliminar el usuario");
          this.errorService.isError(true);
        }
      );
  }

}

