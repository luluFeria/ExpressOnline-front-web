import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private uri: string = 'https://api.escuelajs.co/api/v1/categories';

  private httpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.uri);
  }

  public getById(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(`${this.uri}/${id}`);
  }

  public add(category: Object) {
    return this.http.post(`${this.uri}`, category, { headers: this.httpHeaders });
  }

  public update(id: number, category: any) {
    return this.http.put(`${this.uri}/${id}`, category, { headers: this.httpHeaders });
  }

  public delete(id: number) {
    return this.http.delete(`${this.uri}/${id}`);
  }

}
