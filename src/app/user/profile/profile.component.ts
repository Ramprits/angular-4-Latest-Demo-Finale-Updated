import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// tslint:disable-next-line:no-unused-variable
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cancel() {
    this.router.navigate(['/events/eventList']);
  }

}