import { WebService } from './../../services/web.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  personId;
  person = [];
  inventors = [];
  showChild = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private web: WebService,
    private router: Router
  ) {}

  ngOnInit() {
    /* Reading the parameter */
    this.activatedRoute.params.subscribe(data => {
      this.personId = data.id;
      /* Based on params we are getting the data */
      this.web.getUser(this.personId).subscribe(d => (this.person = d));
    });
    this.getAllUsers();

    /*     this.activatedRoute.params
      .pipe(switchMap(params => this.web.getUser(params.id)))
      .subscribe(person => {
        this.person = person;
      });
 */

    this.activatedRoute.queryParams.subscribe(data => {
      this.showChild = data.showChild === 'true';
    });

    /* Getting by snapshot */
    // this.personId = this.activatedRoute.snapshot.params.id;
    // this.showChild = this.activatedRoute.snapshot.queryParams.showChild;
  }

  getAllUsers() {
    this.web.getAllUser().subscribe(data => (this.inventors = data));
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
