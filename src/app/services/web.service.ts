import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  inventors = [
    { id: 1, first: 'Albert', last: 'Einstein', year: 1879 },
    { id: 2, first: 'Isaac', last: 'Newton', year: 1643 },
    { id: 3, first: 'Galileo', last: 'Galilei', year: 1564 },
    { id: 4, first: 'Marie', last: 'Curie', year: 1867 },
    { id: 5, first: 'Johannes', last: 'Kepler', year: 1571 },
    { id: 5, first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { id: 6, first: 'Max', last: 'Planck', year: 1858 }
  ];
  constructor() {}
  getUser(id) {
    const people = this.inventors;
    return of(people.filter(person => person.id == parseInt(id)));
  }

  getAllUser() {
    return of(this.inventors);
  }
}
