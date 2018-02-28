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
import { OrganizationDetailPageComponent } from './pages/organization-detail-page/organization-detail-page.component';
import { VolunteerDetailPageComponent } from './pages/volunteer-detail-page/volunteer-detail-page.component';
import { RegisterVolunteerPageComponent } from './pages/register-volunteer-page/register-volunteer-page.component';
import { RegisterOrganizationPageComponent } from './pages/register-organization-page/register-organization-page.component';
import { SelectRolPageComponent } from './pages/select-rol-page/select-rol-page.component';
import { UsersService } from './services/users.service';
import { EventService } from './services/event.service';
import { AuthService } from './common/auth.service';
import { VolunteerProfConf } from './pages/volunteer-prof-conf/volunteer-prof-conf.component';
import { OrganitationProfConf } from './pages/organization-prof-conf/organization-prof-conf.component';



const ROUTES = [
     { path: '', component: SignInPageComponent },
     { path: 'home', component: HomePageComponent,canActivate: [AuthService],data: { expectedRole: 'organization,Volunteer'}},
     { path: 'newEvent', component: NewEventPageComponent,canActivate: [AuthService],data: { expectedRole: 'organization'}},
     { path: 'volunteerProfConf', component: VolunteerProfConf,canActivate: [AuthService] ,data: { expectedRole: 'Volunteer'}},
     { path: 'eventDetail', component: EventDetailPageComponent,canActivate: [AuthService],data: { expectedRole: 'organization,Volunteer'}},
     { path: 'organizationDetails', component: OrganizationDetailPageComponent,canActivate: [AuthService],data: { expectedRole: 'organization,Volunteer'}},
     { path: 'volunteerDetails', component: VolunteerDetailPageComponent,canActivate: [AuthService],data: { expectedRole: 'organization,Volunteer'}},
     { path: 'organizationProfConf', component: OrganitationProfConf,canActivate: [AuthService],data: { expectedRole: 'organization'}},
     { path: 'eventList', component: EventListPageComponent,canActivate: [AuthService], data: { expectedRole: 'organization,Volunteer'}},
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
    VolunteerProfConf,
    OrganizationDetailPageComponent,
    VolunteerDetailPageComponent,
    RegisterVolunteerPageComponent,
    RegisterOrganizationPageComponent,
    SelectRolPageComponent,
    OrganitationProfConf,
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
