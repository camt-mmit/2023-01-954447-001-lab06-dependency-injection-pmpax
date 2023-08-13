import { Routes } from '@angular/router';
import { ExampleInputComponent } from './router/example-input/example-input.component';

export const routes: Routes = [
  {
    path: '',
    component: ExampleInputComponent,
    children: [
      { path: '', redirectTo: 'input', pathMatch: 'full' },
      { path: 'input', component: ExampleInputComponent },
    ],
  },
];
