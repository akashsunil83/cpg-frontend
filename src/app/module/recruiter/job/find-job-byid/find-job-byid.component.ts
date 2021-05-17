import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService, Job} from 'src/app/services/job.service';


@Component({
  selector: 'app-find-job-byid',
  templateUrl: './find-job-byid.component.html',
  styleUrls: ['./find-job-byid.component.css']
})
export class FindJobByidComponent implements OnInit {

  id: number;
  job: Job = new Job();

  constructor(private route: ActivatedRoute, private router: Router, private jobService: JobService) { }

  ngOnInit(): void {
    this.job = new Job();
    this.id = this.route.snapshot.params['id'];
    this.jobService.getJobId(this.id)
      .subscribe(data => {
        console.log(data);
        this.job = data;
      }, err => console.log(err));
  }

  
}
