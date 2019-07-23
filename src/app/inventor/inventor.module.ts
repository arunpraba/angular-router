import { InventorComponent } from './inventor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './people/person/person.component';

/* For activating this router Router Module also need to be exported */
const routes: Routes = [
  {
    path: 'inventor',
    component: InventorComponent
  },
  {
    path: 'inventor/people',
    component: PeopleComponent,
    children: [{ path: ':id', component: PersonComponent }]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule, InventorComponent, PersonComponent],
  declarations: [InventorComponent, PeopleComponent, PersonComponent]
})
export class InventorModule {}
