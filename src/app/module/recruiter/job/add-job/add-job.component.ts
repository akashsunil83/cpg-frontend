import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService, Job } from 'src/app/services/job.service';


@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  constructor(private jobService: JobService, private router: Router) { }
  job: Job = new Job;
  ngOnInit(): void {
  }
  onSubmit(addJob: Job): any {
    console.log(addJob);
    alert("Job Successfully");
    this.job.freelancerId = addJob.freelancerId;
    this.job.recruiterId = addJob.recruiterId;
    this.job.skillId = addJob.skillId;
    this.jobService.postJob(this.job)
      .subscribe(data => {
        console.log(data);
        alert(data);
        //TODO: Route to Recruiter Module Homepage
      }, err => console.log(err));
  }

}
