import { DispatcherSignInComponent } from './pages/sign-in-pages/dispatcher-sign-in/dispatcher-sign-in.component';
import { UserDashboardComponent } from './pages/dashboards/user-dashboard/user-dashboard.component';
import { InfoComponent } from './pages/sign-in-pages/info/info.component';
import { ConfirmationComponent } from './pages/sign-in-pages/confirmation/confirmation.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './helpers/auth.guard';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {FaqComponent} from "./pages/faq/faq.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {PrivacyPolicyComponent} from "./pages/privacy-policy/privacy-policy.component";
import {RegisterComponent} from "./pages/register/register.component";
import {RequestQuoteComponent} from "./pages/request-quote/request-quote.component";
import {TeamComponent} from "./pages/team/team.component";
import {TermsConditionsComponent} from "./pages/terms-conditions/terms-conditions.component";
import {ServicesComponent} from "./pages/services/services.component";
import {ServicesDetailsComponent} from "./pages/services-details/services-details.component";
import {TestimonialsComponent} from "./pages/testimonials/testimonials.component";
import {SignInComponent} from "./pages/sign-in-pages/sign-in/sign-in.component";
import { DistpatcherDashboardComponent } from './pages/dashboards/distpatcher-dashboard/distpatcher-dashboard.component';

const routers: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'services-details', component: ServicesDetailsComponent},
  {path: 'faqs', component: FaqComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'sign-up', component: RegisterComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-in/confirmation', component: ConfirmationComponent},
  {path: 'sign-in/info', component: InfoComponent},
  {path: 'driver-sign-in', component: DispatcherSignInComponent},
  {path: 'applicant-dashboard',canActivate: [AuthGuard] , component: UserDashboardComponent },
  {path: 'driver-dashboard',canActivate: [AuthGuard] , component: DistpatcherDashboardComponent},
  {path: 'request-quote', component: RequestQuoteComponent},
  {path: 'team', component: TeamComponent},
  {path: 'terms-conditions', component: TermsConditionsComponent},
  {path: 'testimonials', component: TestimonialsComponent},

] as Routes;

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
