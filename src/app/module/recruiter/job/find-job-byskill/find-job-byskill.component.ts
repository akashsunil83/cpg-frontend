import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JobService, Job} from 'src/app/services/job.service';


@Component({
  selector: 'app-find-job-byskill',
  templateUrl: './find-job-byskill.component.html',
  styleUrls: ['./find-job-byskill.component.css']
})
export class FindJobByskillComponent implements OnInit {

  id: number
  skillName: string
  job: Observable<Job[]>;
  constructor(private route: ActivatedRoute, private router: Router, private jobService: JobService) { }
  ngOnInit(): void {
    //TODO
    this.job = new Observable<Job[]>();
    this.skillName = this.route.snapshot.params['skillName'];
    this.jobService.getJobBySkill(this.skillName)
      .subscribe(data => {
        console.log(data);
        this.job = data;
      }, err => console.log(err));
  }

  reloadData() {
    this.skillName = this.route.snapshot.params['skillName'];
    this.job = this.jobService.getJobBySkill(this.skillName);
  }

  

  jobDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}
