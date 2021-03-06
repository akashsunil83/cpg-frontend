import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookmarkedfreelancerService {
  private baseUrl = "http://localhost:8000/bmark/freelancer";

  constructor(private http: HttpClient) { }

  // POST METHOD
  public addBookmarkFreelancer(bMark: BookmarkFreelancer): Observable<any> {
    console.log("Add bookmark Freelancer method");
    const headers = new HttpHeaders().set('Content_Type ', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/add`, bMark, { headers, responseType: 'json' });
  }

  //DELETE METHOD
  public deleteBookmarkFreelancer(id: number): Observable<any> {
    console.log("Delete bookmark Freelancer method");
    const headers = new HttpHeaders().set('Content_Type ', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { headers, responseType: 'json' });
  }

  //GET METHOD
  public getBookmarkedFreelancersBySkill(skillName: string): Observable<any> {
    console.log("Bookmarked Freelancers by skill Name method");
    const headers = new HttpHeaders().set('Content_Type ', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/findBySkill/${skillName}`, { headers, responseType: 'json' });
  }

  //GET METHOD
  public getBookmarkedFreelancerById(id: number): Observable<any> {
    console.log("Get Bookmarked Freelancer By Id");
    const headers = new HttpHeaders().set('Content_Type ', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/${id}`, { headers, responseType: 'json' });
  }
}


export class BookmarkFreelancer {
  skillId: number;
  recruiterId: number;
  freelancerId: number;
}

