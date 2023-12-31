import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/models/User.model';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.sass']
})
export class DetailUserComponent implements OnInit {
  idUser: number;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.idUser = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getById(this.idUser)
    .subscribe(
      (response: IUser) => {
        this.user = response;
      }
      );
  }

}
