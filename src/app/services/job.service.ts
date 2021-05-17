import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = "http://localhost:8000/job";
  constructor(private http: HttpClient) { }

  //Get Method
  public getJobId(id: number): Observable<any> {
    console.log("Get Job By Id");
    const headers = new HttpHeaders().set('Content_Type ', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/findById/${id}`, { headers, responseType: 'json' });
  }
  // Get Method
  public getJobBySkill(skillName: string): Observable<any> {
    console.log("Job by skill Name method");
    const headers = new HttpHeaders().set('Content_Type ', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/findBySkill/${skillName}`, { headers, responseType: 'json' });
  }
  //Post Method
  public postJob(job: Job): Observable<any> {
    console.log("Add job method");
    const headers = new HttpHeaders().set('Content_Type ', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/postJob`, job, { headers, responseType: 'json' });
  }

}

export class Job {
  skillId: number;
  recruiterId: number;
  freelancerId: number;
}
