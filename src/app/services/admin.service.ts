import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = "http://localhost:8000/admin";

  constructor(private http: HttpClient) { }

  // POST METHOD
  public addAdmin(admin: Admin): Observable<any> {
    console.log("Add Admin method");
    const headers = new HttpHeaders().set('Content_Type ', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/save`, admin, { headers, responseType: 'json' });
  }

   //GET METHOD
   public getAdminById(id: number): Observable<any> {
    console.log("Get Admin By Id");
    const headers = new HttpHeaders().set('Content_Type ', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/find/${id}`, { headers, responseType: 'json' });
  }


}


export class Admin {
  FirstName: string;
  LastName: string;
  Password: string;
}