import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  loading:boolean = true;

  constructor() { }

  ngOnInit(): void {

    this.loading = false;
  }

  simulateCardTransaction() {

  }

}
