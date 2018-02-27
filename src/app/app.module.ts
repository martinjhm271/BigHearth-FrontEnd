import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppDataService } from './common/app-data.service';
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';
import { HttpModule } from '@angular/http';


import { SignInPageComponent } from './pages/sign-in/sign-in-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NewEventPageComponent } from './pages/new-event-page/new-event-page.component';
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';
import { EventListPageComponent } from './pages/event-list-page/event-list-page.component';
import { RegisterVolunteerPageComponent } from './pages/register-volunteer-page/register-volunteer-page.component';
import { RegisterOrganizationPageComponent } from './pages/register-organization-page/register-organization-page.component';
import { SelectRolPageComponent } from './pages/select-rol-page/select-rol-page.component';
import { UsersService } from './services/users.service';
import { EventService } from './services/event.service';
import { AuthService } from './common/auth.service';



const ROUTES = [
     { path: '', component: SignInPageComponent },
     { path: 'home', component: HomePageComponent,canActivate: [AuthService] },
     { path: 'newEvent', component: NewEventPageComponent,canActivate: [AuthService] },
     { path: 'eventDetail', component: EventDetailPageComponent,canActivate: [AuthService] },
     { path: 'eventList', component: EventListPageComponent,canActivate: [AuthService] },
     { path: 'registerVolunteer', component: RegisterVolunteerPageComponent },
     { path: 'registerOrganization', component: RegisterOrganizationPageComponent },
     { path: 'selectRol', component: SelectRolPageComponent },
     { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignInPageComponent,
    PageNotFoundComponent,
    EventDetailPageComponent,
    EventListPageComponent,
    RegisterVolunteerPageComponent,
    RegisterOrganizationPageComponent,
    SelectRolPageComponent,
    NewEventPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: { apiURL: 'http://localhost:8080'}
    },
    AuthService,
    AppDataService,
    UsersService,
    EventService,
    AppConfiguration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
