import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component'
import { TwoComponent } from './two/two.component'

const routes: Routes = [
    { path: "alpha/one", component: OneComponent, pathMatch: "prefix" },
    { path: "alpha/two", component: TwoComponent, pathMatch: "prefix" },
    { path: "**", redirectTo: "alpha/one" }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
