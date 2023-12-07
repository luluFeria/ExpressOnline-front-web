import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category3 } from 'src/app/models/Category3';

@Injectable({
  providedIn: 'root'
})
export class categoryEjemplo {

  private uri: string = 'https://api.escuelajs.co/api/v1/categories';

  private httpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<Category3[]> {
    return this.http.get<Category3[]>(this.uri);
  }

  public getById(id: number): Observable<Category3> {
    return this.http.get<Category3>(`${this.uri}/${id}`);
  }

  public add(item: Object) {
    return this.http.post(`${this.uri}`, item, { headers: this.httpHeaders });
  }

  public update(id: number, item: any) {
    return this.http.put(`${this.uri}/${id}`, item, { headers: this.httpHeaders });
  }

  public delete(id: number) {
    return this.http.delete(`${this.uri}/${id}`);
  }
}

