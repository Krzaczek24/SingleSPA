import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { OneComponent } from './one/one.component'
import { TwoComponent } from './two/two.component'
import { APP_BASE_HREF } from '@angular/common'

const routes: Routes = [
    { path: "one", component: OneComponent, pathMatch: "prefix" },
    { path: "two", component: TwoComponent, pathMatch: "prefix" },
    { path: "**", redirectTo: "one" }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [{ provide: APP_BASE_HREF, useValue: '/alpha' }]
})
export class AppRoutingModule { }
