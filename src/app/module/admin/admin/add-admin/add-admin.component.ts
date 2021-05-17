import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService, Admin } from 'src/app/services/admin.service';
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }
  admin: Admin = new Admin;
  ngOnInit(): void {
  }
  onSubmit(addAdmin: Admin): any {
    console.log(addAdmin);
    alert("Admin Successfully");
    this.admin.FirstName = addAdmin.FirstName;
    this.admin.LastName = addAdmin.LastName;
    this.admin.Password = addAdmin.Password;
    this.adminService.addAdmin(this.admin)
      .subscribe(data => {
        console.log(data);
        alert(data);
      }, err => console.log(err));
  }

}

