import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favlist',
  templateUrl: './favlist.component.html',
  styleUrls: ['./favlist.component.scss']
})
export class FavlistComponent implements OnInit {
  localUser;
  constructor() { }

  ngOnInit() {
    this.localUser = JSON.parse(localStorage.getItem('localUser'));
  }

}
