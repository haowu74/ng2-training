import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListPostsComponent} from './observable-example/list-posts/list-posts.component';
import {TwoWayDataBindingExampleComponent} from './two-way-data-binding-example/two-way-data-binding-example.component';
import {BindingsComponent} from './bindings';
import {MenuComponent} from './menu/menu.component';
import {TemplateDrivenFormComponent} from './forms/template-driven-form.component';
import {ReactiveFormComponent} from './forms/reactive-form.component';

const appRoutes: Routes = [
  {
    path: '', component: MenuComponent
  }, {
    path: 'list-posts', component: ListPostsComponent
  },{
    path: '2-way-data-binding', component: TwoWayDataBindingExampleComponent
  },{
    path: 'bindings', component: BindingsComponent
  },{
    path: 'template-driven-form', component: TemplateDrivenFormComponent
  },{
    path: 'reactive-form', component: ReactiveFormComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);