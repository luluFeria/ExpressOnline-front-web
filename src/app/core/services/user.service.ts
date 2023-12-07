import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uri: string = 'https://api.escuelajs.co/api/v1/users';

  private httpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.uri);
  }

  public getById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.uri}/${id}`);
  }

  public save( user: object) {
    return this.http.post(`${this.uri}`, user, { headers: this.httpHeaders});
  }

  public addUser(user: Object) {
    return this.http.post(`${this.uri}`, user, { headers: this.httpHeaders });
  }

  public update(id: number, category: any) {
    return this.http.put(`${this.uri}/${id}`, category, { headers: this.httpHeaders });
  }

  public delete(id: number) {
    return this.http.delete(`${this.uri}/${id}`);
  }

}
