import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/core/services/error.service';

@Component({
  selector: 'app-system-error',
  templateUrl: './system-error.component.html',
  styleUrls: ['./system-error.component.sass']
})
export class SystemErrorComponent implements OnInit {

  constructor(
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.errorService.isError(false);
  }

}
