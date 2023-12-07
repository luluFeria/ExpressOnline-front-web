import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private error$: Subject<boolean>;

  constructor() {
    this.error$ = new Subject();
  }

  isError(value: boolean) {
    this.error$.next(value);
  }

  getError() {
    return this.error$.asObservable();
  }
}
