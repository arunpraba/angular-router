import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from './../../../services/web.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  personId;
  person;
  constructor(
    private activatedRoute: ActivatedRoute,
    private web: WebService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.personId = data.id;
      /* Based on params we are getting the data */
      this.web.getUser(this.personId).subscribe(d => (this.person = d));
    });
  }
}
