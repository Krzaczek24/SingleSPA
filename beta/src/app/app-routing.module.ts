import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component'
import { TwoComponent } from './two/two.component'

const routes: Routes = [
    { path: "beta/one", component: OneComponent, pathMatch: "prefix" },
    { path: "beta/two", component: TwoComponent, pathMatch: "prefix" },
    { path: "**", redirectTo: "beta/one" }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
