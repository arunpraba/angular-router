import { WebService } from './../../services/web.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  personId;
  person = [];
  showChild = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private web: WebService
  ) {}

  ngOnInit() {
    /* Reading the parameter */
    this.activatedRoute.params.subscribe(data => {
      this.personId = data.id;
      /* Based on params we are getting the data */
      this.web.getUser(this.personId).subscribe(d => (this.person = d));
    });

    this.activatedRoute.queryParams.subscribe(data => {
      this.showChild = data.showChild === 'true';
    });

    /* Getting by snapshot */
    // this.personId = this.activatedRoute.snapshot.params.id;
    // this.showChild = this.activatedRoute.snapshot.queryParams.showChild;
  }
}
