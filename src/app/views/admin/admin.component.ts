import { Component, Input, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/core/services/error.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  isError: boolean = false;
  isSidebarOpen = true;

  constructor(
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.errorService.getError()
    .subscribe(
      (response: boolean) => {
        this.isError = response;
      }
    )

  }

}
