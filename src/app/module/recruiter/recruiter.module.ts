import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { BookmarkedfreelancerComponent } from './bookmarkedfreelancer/bookmarkedfreelancer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { JobComponent } from './job/job.component';
import { AddJobComponent } from './job/add-job/add-job.component';
import { FindJobByidComponent } from './job/find-job-byid/find-job-byid.component';
import { FindJobByskillComponent } from './job/find-job-byskill/find-job-byskill.component';


@NgModule({
  declarations: [BookmarkedfreelancerComponent, FeedbackComponent, JobComponent, AddJobComponent, FindJobByidComponent, FindJobByskillComponent],
  imports: [
    CommonModule,
    RecruiterRoutingModule
  ]
})
export class RecruiterModule { }
