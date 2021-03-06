import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookmarkfreelancerComponent } from './bookmarkedfreelancer/add-bookmarkfreelancer/add-bookmarkfreelancer.component';
import { BookmarkedfreelancerComponent } from './bookmarkedfreelancer/bookmarkedfreelancer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FindBookmarkfreelancerByidComponent } from './bookmarkedfreelancer/find-bookmarkfreelancer-byid/find-bookmarkfreelancer-byid.component';
import { FindBookmarkfreelancerByskillComponent } from './bookmarkedfreelancer/find-bookmarkfreelancer-byskill/find-bookmarkfreelancer-byskill.component';
import { JobComponent } from './job/job.component'
import { AddJobComponent } from './job/add-job/add-job.component';
import { FindJobByidComponent } from './job/find-job-byid/find-job-byid.component';
import { FindJobByskillComponent } from './job/find-job-byskill/find-job-byskill.component';
const routes: Routes = [
  //base path
  { path: '', redirectTo: 'recruiter', pathMatch: 'full' },
  //path to bookmarkfreelancer and its services
  {
    path: '/bmark/freelancer',
    component: BookmarkedfreelancerComponent,
    children: [
      {
        path: '/add',
        component: AddBookmarkfreelancerComponent
      },
      {
        path: '/find/:id',
        component: FindBookmarkfreelancerByidComponent
      },
      {
        path: '/find/:skillName',
        component: FindBookmarkfreelancerByskillComponent
      }
    ],
  },
  //path to feedback and its services
  {
    path: '/feedback',
    component: FeedbackComponent,
    children: [
      {

      },
      {

      }
    ]
  },
  //path to job and its services
  {
    path: '/job',
    component: JobComponent,
    children: [
      {
        path: '/add',
        component:AddJobComponent

      },
      {
        path: '/find/:id',
        component: FindJobByidComponent
      },
      {
        path: '/find/:skillName',
        component: FindJobByskillComponent
    
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
