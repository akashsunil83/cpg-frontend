import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService, Admin } from 'src/app/services/admin.service';

@Component({
  selector: 'app-find-admin-byid',
  templateUrl: './find-admin-byid.component.html',
  styleUrls: ['./find-admin-byid.component.css']
})
export class FindAdminByidComponent implements OnInit {

  id: number;
  admin: Admin = new Admin();

  constructor(private route: ActivatedRoute, private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.admin = new Admin();
    this.id = this.route.snapshot.params['id'];
    this.adminService.getAdminById(this.id)
      .subscribe(data => {
        console.log(data);
        this.admin = data;
      }, err => console.log(err));
  }

  
}