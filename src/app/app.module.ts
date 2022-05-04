import { DynamicTableModule } from './components/dynamic-table/dynamic-table.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {ApiService} from './services/api.service';
import {AuthGuard} from './helpers/auth.guard';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServicesDetailsComponent } from './pages/services-details/services-details.component';
import {MatIconModule} from '@angular/material/icon';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { TeamComponent } from './pages/team/team.component';
import { RequestQuoteComponent } from './pages/request-quote/request-quote.component';
import { RegisterComponent } from './pages/register/register.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { FaqComponent } from './pages/faq/faq.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { SignInComponent } from './pages/sign-in-pages/sign-in/sign-in.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import { InfoComponent } from './pages/sign-in-pages/info/info.component';
import { ConfirmationComponent } from './pages/sign-in-pages/confirmation/confirmation.component';
import { UserDashboardComponent } from './pages/dashboards/user-dashboard/user-dashboard.component';
import { DistpatcherDashboardComponent } from './pages/dashboards/distpatcher-dashboard/distpatcher-dashboard.component';
import { DispatcherSignInComponent } from './pages/sign-in-pages/dispatcher-sign-in/dispatcher-sign-in.component';
import { NgpImagePickerModule } from 'ngp-image-picker'; 
import {MatRadioModule} from '@angular/material/radio'; 
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    TermsConditionsComponent,
    TeamComponent,
    RequestQuoteComponent,
    RegisterComponent,
    PrivacyPolicyComponent,
    GalleryComponent,
    FaqComponent,
    NotFoundComponent,
    TestimonialsComponent,
    SignInComponent,FooterComponent,HeaderComponent, DispatcherSignInComponent, InfoComponent, ConfirmationComponent, UserDashboardComponent, DistpatcherDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,
    MatExpansionModule,NgpImagePickerModule,
    MatCardModule,MatTabsModule,DynamicTableModule,
    MatRadioModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ApiService,
    AuthGuard
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
