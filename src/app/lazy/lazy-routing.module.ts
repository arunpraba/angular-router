import { LazyComponent } from './lazy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent,
    children: [
      {
        path: 'first',
        loadChildren: () =>
          import('./first/first.module').then(m => m.FirstModule)
      },
      {
        path: 'second',
        loadChildren: () =>
          import('./second/second.module').then(m => m.SecondModule)
      },
      {
        path: 'third',
        loadChildren: () =>
          import('./third/third.module').then(m => m.ThirdModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {}
