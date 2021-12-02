import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './helpers/auth.guard';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";

const routers: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ContactComponent},
  {path: 'services-details', component: ContactComponent},
] as Routes;

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
